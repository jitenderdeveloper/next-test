"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

function Social_Share({ share_loc }) {
  return (
    <>
      <div className="link-shares mt-3">
        <FacebookShareButton url={share_loc}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={share_loc}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton url={share_loc}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton url={share_loc}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </div>
    </>
  );
}

export default Social_Share;
