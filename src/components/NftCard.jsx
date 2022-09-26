import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

const NftCard = ({ nfts }) => {
  console.log(nfts);
  return (
    <div className="row">
      {nfts.map((nft, index) => (
        <Link to={`/nft/${nft.contract}/${nft.tokenId}`} key={index}>
          <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="nft__item">
              <div className="nft__item_wrap" style={{ height: `245px` }}>
                <Outer>
                  <span>
                    <img
                      src="/img/klaytn-logo.svg"
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </span>
                </Outer>
              </div>
              <div className="nft__item_info">
                <div className="spacer-10" />
                <span onClick={() => window.open(nft.nftLink, "_self")}>
                  <h4>Kimchi Review NFT # {nft.tokenId}</h4>
                </span>
                <div className="spacer-10" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NftCard;
