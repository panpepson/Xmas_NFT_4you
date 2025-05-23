let currentAccount = null;

async function connectWallet() {
  const walletBtn = document.getElementById("connectButton");

  if (!window.ethereum) {
    alert("MetaMask is not available.");
    return;
  }

  if (currentAccount) {
    // Rozłączenie portfela
    currentAccount = null;
    walletBtn.innerHTML = "Connect your wallet to PulseChain network";
    document.getElementById("balance").innerHTML = "";
    document.getElementById("mintButtonContainer").innerHTML = "";
    document.getElementById("tokenIdDisplay2").innerHTML = "";
    return;
  }

  try {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts.length > 0) {
      currentAccount = accounts[0];
      walletBtn.innerHTML = `You are logged in as: <br><b>${shortenAddress(currentAccount)}</b>`;
      
      // Dodaj obsługę PulseChain
      await setupPulseChain();
    }
  } catch (error) {
    console.error("Connection error:", error);
  }
}

function shortenAddress(address) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

async function setupPulseChain() {
  try {
    const web3 = new Web3(window.ethereum);
    
    // Najpierw próbujemy przełączyć na PulseChain
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x171' }],
      });
    } catch (switchError) {
      // Jeśli sieć nie jest znana, dodajemy ją
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x171',
              chainName: 'PulseChain',
              rpcUrls: ['https://rpc.pulsechain.com'],
              nativeCurrency: {
                name: 'PLS',
                symbol: 'PLS',
                decimals: 18,
              },
              blockExplorerUrls: ['https://otter.pulsechain.com'],
            }],
          });
        } catch (addError) {
          console.error("Error adding PulseChain:", addError);
          throw addError;
        }
      } else {
        console.error("Error switching to PulseChain:", switchError);
        throw switchError;
      }
    }
    
    // Sprawdź czy jesteśmy na PulseChain
    const chainId = await web3.eth.getChainId();
    if (chainId !== 369) { // 369 to decimalny odpowiednik 0x171
      alert("Please switch to PulseChain network");
      return;
    }
    
    // Pobierz balance
    const balance = await web3.eth.getBalance(currentAccount);
    const formattedBalance = (web3.utils.fromWei(balance, 'ether') * 1).toFixed(2);
    document.getElementById("balance").innerHTML = `<p class="rounded-pill bg-success kasa">Account balance: <br><b>${formattedBalance}</b> PLS</p>`;
    
    // Dodaj przycisk mint
    document.getElementById("mintButtonContainer").innerHTML = '<center><button id="mintButton" type="button" class="btn btn-primary bg-dark rounded-pill mint"><h1>Mint Xmas_NFT_4you</h1></button></center>';
    
    // Inicjalizuj przycisk mint
    setupMintButton();
        Confetti();

    // Odśwież listę NFT
      loadUserNFTs();
  } catch (error) {
    console.error("Error setting up PulseChain:", error);
    alert("Error connecting to PulseChain. Please try again.");
  }
}

function setupMintButton() {
  document.getElementById("mintButton").addEventListener("click", async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const contractAddress = '0x9DF4d4eC50132C53D5e4928F2688af26068fa096';
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      
      showLoader(true);
      
      const result = await contract.methods.mint().send({ from: currentAccount });
      const tokenId = result.events?.Transfer?.returnValues?.tokenId;
      
      if (tokenId) {
        document.getElementById("tokenIdDisplay").innerHTML = `<center>
          <br><h2> OK success 👍🤠 you now have token number ${tokenId} 😍</h2><br>
          <h3>Here are <b>Instructions</b> how to add token to wallet:</h3>
          Open MetaMask in your browser.<br>
          Click on MetaMask icon 🦊 in browser bar.<br>
          Select <b>"NFTs"</b> tab and at bottom <br>
          Click <b>"+ Import NFT"</b><br><br>
          Enter Contract address: <b>${contractAddress}</b><br>
          Token ID: <b>${tokenId}</b></center>
          Or visit <a href="https://pulsemarket.app/collection/0x9DF4d4eC50132C53D5e4928F2688af26068fa096">https://pulsemarket.app</a> and login with the wallet you used to mint the token, the token should already be there 🤠🤖</div>`;
       }
      
      // NFT jakie ma user
      loadUserNFTs();
      
    } catch (error) {
      console.error("Minting error:", error);
      alert("Error minting NFT. Please try again.");
    } finally {
      showLoader(false);
    }
  });
}

async function loadUserNFTs() {
  try {
    showLoader(true);
    
    const web3 = new Web3(window.ethereum);
    const contractAddress = '0x9DF4d4eC50132C53D5e4928F2688af26068fa096';
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    
    const numMinted = await contract.methods.numMinted().call();
    const nftBalance = await contract.methods.balanceOf(currentAccount).call();

    let nftDisplay = `<center><h4>You own ${nftBalance} out of ${numMinted} total minted NFTs</h4><div class="nft-gallery">`;

    if (nftBalance >= 12) {
      document.getElementById('buyInfo').innerHTML = `<b>Sorry 🤔 buddy, you've minted max allowed per address</b> now you can only get <b>Xmas_NFT_4you</b> on <a href="https://otter.pulsechain.com/address/address/${contractAddress}" target="_blank">https://otter.pulsechain.com/</a> or mint from another address 😎`;
    }else {
        for (let i = 0; i < numMinted + 1; i++) {
      try {
           const owner = await contract.methods.ownerOf(i).call(); 
          if (owner.toLowerCase() === currentAccount.toLowerCase()) {
            let tokenId = i;
          const tokenUri = await contract.methods.tokenURI(i).call();

          let imageUrl = tokenUri;
          let tokenName = `NFT #${tokenId}`;
          let animation_url = '';

          if (tokenUri.startsWith('data:application/json;base64,')) {
            const base64Data = tokenUri.split(',')[1];
            const jsonMetadata = JSON.parse(atob(base64Data));
            imageUrl = jsonMetadata.image || imageUrl;
            animation_url = jsonMetadata.animation_url || '';
            tokenName = jsonMetadata.name || tokenName;
          }

          nftDisplay += `
            <div class="nft-item">
              <a href="#" onclick="openAnimation('${animation_url}')" alt="${tokenName}">
                <img src="${imageUrl}" alt="${tokenName}" class="img-thumbnail" width="200">
              </a>
              <p class="nft-title">${tokenName}</p>
              <p class="nft-id">Token ID: ${tokenId}</p>
            </div>`;
        }
      } catch (error) {
   // --- 
      }
   }
}
    nftDisplay += '</div></center>';

    if (nftBalance == 0) {
      nftDisplay = '<h4>You don\'t own any NFTs from this collection</h4>';
     }
  
    showLoader(false);
    document.getElementById('tokenIdDisplay2').innerHTML = nftDisplay;
    
  } catch (error) {
    console.error("Error loading NFTs:", error);
    document.getElementById('tokenIdDisplay2').innerHTML = 'Error loading NFTs.';
    showLoader(false); 
   } 

finally {
    showLoader(false);
  }

}

function showLoader(show) {
  document.getElementById('loader').style.display = show ? 'block' : 'none';
}

function openAnimation(animation_url) {
  if (animation_url.startsWith('data:text/html;base64,')) {
    const newTab = window.open();
    newTab.document.write(atob(animation_url.split(',')[1]));
    newTab.document.close();
  } else if (animation_url) {
    window.open(animation_url, '_blank');
  }
}

function Confetti() {
  confetti({ particleCount: 250, spread: 80, origin: { y: 0.6 } });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Address copied to clipboard: ' + text);
    })
    .catch((error) => {
      console.error('Copy error:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  // Nasłuchuj zmian konta i sieci
  if (typeof window.ethereum !== 'undefined') {
    ethereum.on('accountsChanged', (accounts) => {
      if (accounts.length === 0) {
        // Portfel został rozłączony
        connectWallet();
      } else {
        // Konto zostało zmienione
        currentAccount = accounts[0];
        document.getElementById("connectButton").innerHTML = `You are logged in as: <br><b>${shortenAddress(currentAccount)}</b>`;
        setupPulseChain();
      }
    });
    
    ethereum.on('chainChanged', () => {
      window.location.reload();
    });
  }
  
  // Podłącz przycisk connect
  document.getElementById('connectButton').addEventListener('click', connectWallet);
  
  // Inicjalizuj inne elementy UI
  document.querySelector('.book-icon').addEventListener('click', async () => {
    try {
      const modal = new bootstrap.Modal(document.getElementById('bookModal'));
      modal.show();
      const response = await fetch('Whitepaper-UK.md');
      if (!response.ok) throw new Error('Failed to load whitepaper');
      const markdown = await response.text();
      const html = marked.parse(markdown);
      document.getElementById('whitepaperContent').innerHTML = html;
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('whitepaperContent').innerHTML = 
        '<p class="text-danger">Sorry, failed to load whitepaper. Please try again later.</p>';
    }
  });
});
