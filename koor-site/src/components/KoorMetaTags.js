import React from "react";
import { Helmet } from "react-helmet";

function KoorMetaTags ({ title: koorTitle = '', description: koorDesc = '', image: koorSocialPreview = '', name: koorKeywords = '' }) {        
    var purekoorURL = "https://purekoor.com";
    var koorAuthor = "PureKoor";
    //change og image type to jpeg

    return (
          <Helmet>
              { /* Standard metadata tags */ }
              <title>{koorTitle}</title>
              <meta charSet="utf-8" />
              <link rel='canonical' href={purekoorURL} />
              <meta name='description' content={koorDesc} />
              <meta name="keywords" content={koorKeywords} />
              <meta name="author" content={koorAuthor}/>
              { /* Open Graph tags (OG) */ }
              <meta property="og:url" content={purekoorURL} />
              <meta property="og:type" content="website" />
              <meta property="og:title" content={koorTitle} />
              <meta property="og:description" content={koorDesc} />
              {/* OG image tags */}
              <meta property="og:image" content={koorSocialPreview} />
              <meta property="og:image:secure_url" content={koorSocialPreview} />
              <meta property="og:image:type" content="image/png" />
              <meta property="og:image:alt" content={`Image of ${koorTitle} site`} />
              { /* Twitter tags */ }
              <meta name="twitter:creator" content={koorAuthor} />
              <meta property="twitter:url" content={purekoorURL} />
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:title" content={koorTitle} />
              <meta name="twitter:description" content={koorDesc} />
              <meta property="twitter:image" content={koorSocialPreview} />
              { /* Robots */ }
              <meta name="robots" content="noai, noimageai" />           
          </Helmet>
    );
  }


{/*
function MyMetatagComponent () {
    var koorDesc = ;
    var koorTitle = ;
    var koorKeywords = ;

    return (
        <div className="MetaData-koor-main">
            <Helmet>
                <title>PureKoor</title>
                <meta name="title" content={koorTitle} />
                <meta name="description" content={koorDesc} />
                x
                x Just need to recopy from master
                {/* Social Media Preview Metas
                {        /* Facebook
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://purekoor.com" />
                <meta property="og:title" content={koorTitle} />
                <meta property="og:description" content={koorDesc} />
                <meta property="og:image" content="https://purekoor.com/assets/SocialPreview.png" />
                {       /* Twitter
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://purekoor.com" />
                <meta property="twitter:title" content={koorTitle} />
                <meta property="twitter:description" content={koorDesc} />
                <meta property="twitter:image" content="https://purekoor.com/assets/SocialPreview.png" />
                <meta name="og:image" content="https://purekoor.com/assets/SocialPreview.png" />
                {        /* Robots
                <meta name="robots" content="noai, noimageai" />
                {        /* Other
                <meta charSet="utf-8" />
                <link rel="icon" href="assets/favicon_purekoor.ico" type='image/ico' />
            </Helmet>
        </div>
    );
}
*/}

export default KoorMetaTags;