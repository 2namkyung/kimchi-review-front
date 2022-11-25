import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import { createGlobalStyle } from "styled-components";
import walletState from "../../recoil/wallet";
import NftCard from "../NftCard";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #FAF6F1;
    border-bottom: solid 1px #ccc !important;
  }
`;

const Collection = function () {
  const [openMenu, setOpenMenu] = React.useState(true);
  const [openMenu1, setOpenMenu1] = React.useState(false);

  const handleBtnClick = () => {
    setOpenMenu(true);
    setOpenMenu1(false);
    document.getElementById("Mainbtn").classList.add("active");
    document.getElementById("Mainbtn1").classList.remove("active");
  };

  const handleBtnClick1 = () => {
    setOpenMenu1(true);
    setOpenMenu(false);
    document.getElementById("Mainbtn1").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
  };

  const [nftList, setNftList] = useState([]);
  const [myNftList, setMyNftList] = useState([]);

  const { address } = useRecoilValue(walletState);

  useEffect(() => {
    async function getNftList() {
      try {
        const result = await axios.get(
          `https://api-kimchi.dev.knx.exchange/v1/review/nft?page=1&size=300`
        );
        setNftList(result.data.response);
      } catch (error) {
        console.log(error);
      }
    }

    getNftList();
  }, []);

  useEffect(() => {
    async function getMyNftList() {
      try {
        const result = await axios.get(
          `https://api-kimchi.dev.knx.exchange/v1/review/myNft?address=${address.toLowerCase()}`
        );

        setMyNftList(result.data.response);
      } catch (error) {
        console.log(error);
      }
    }

    if (address !== "") {
      getMyNftList();
    }
  }, [address]);

  return (
    <div>
      <GlobalStyles />

      <section id="profile_banner" className="jumbotron breadcumb no-bg">
        <div className="mainbreadcumb"></div>
      </section>

      <section className="container d_coll no-top no-bottom">
        <div className="row">
          <div className="col-md-12">
            <div className="d_profile">
              <div className="profile_avatar">
                <div className="d_profile_img">
                  <img src="/img/character.png" alt="" />
                  <i className="fa fa-check"></i>
                </div>

                <div className="profile_name">
                  <h4>
                    KIMCHI REVIEW NFT
                    <div className="clearfix"></div>
                    <span id="wallet" className="profile_wallet">
                      0xbA8dfA461404d90fB680512bbf7a7e3E66E184DF
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container no-top">
        <div className="row">
          <div className="col-lg-12">
            <div className="items_filter">
              <ul className="de_nav">
                <li id="Mainbtn" className="active">
                  <span onClick={handleBtnClick}>NFTs</span>
                </li>
                <li id="Mainbtn1" className="">
                  <span onClick={handleBtnClick1}>My NFT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {openMenu && (
          <div id="zero1" className="onStep fadeIn">
            <NftCard nfts={nftList} />
          </div>
        )}
        {openMenu1 && (
          <div id="zero2" className="onStep fadeIn">
            <NftCard nfts={myNftList} />
          </div>
        )}
      </section>
    </div>
  );
};
export default Collection;
