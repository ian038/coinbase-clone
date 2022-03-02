import Header from "../components/Header";
import styled from "styled-components";
// import Main from "../components/Main";
// import Sidebar from "../components/Sidebar";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

// const sdk = new ThirdwebSDK(
//   new ethers.Wallet(process.env.NEXT_PUBLIC_METAMASK_KEY, ethers.getDefaultProvider("https://eth-rinkeby.alchemyapi.io/v2/aomq9bAqKPXysSkCOV8vhCC3yWO1snAH")
//   )
// );

function Dashboard({ address }) {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

//   useEffect(() => {
//     const getSanityAndThirdWebTokens = async () => {
//       const coins = await fetch(
//         "https://zhv96q28.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D'Coins'%5D%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
//       );
//       const sanityToken = (await coins.json()).result;
//       setSanityTokens(sanityToken);
//       console.log(sanityToken);

//       setThirdWebTokens(
//         sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
//       );
//     };
//     return getSanityAndThirdWebTokens();
//   }, []);

  return (
    <Wrapper>
      {/* <Sidebar /> */}
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        {/* <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        /> */}
      </MainContainer>
    </Wrapper>
  );
}

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;
const MainContainer = styled.div`
  flex: 1;
`;