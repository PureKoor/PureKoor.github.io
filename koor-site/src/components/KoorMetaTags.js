import React from "react";
import { Helmet } from "react-helmet";
//import favicon from './favicon_purekoor.ico';

function KoorMetaTags ({ title: koorTitle = '', description: koorDesc = '', image: koorSocialPreview = '', name: koorKeywords = '', icon: koorIcon, url: purekoorURL, name: koorAuthor }) {        
   // var purekoorURL = "https://purekoor.com";
   // var koorAuthor = "PureKoor";
    //change og image type to jpeg
    return (
          <Helmet>
              { /* Standard metadata tags */ }
              <title>{koorTitle}</title>
              <link rel='canonical' href={purekoorURL} />
              <meta name='description' content={koorDesc} />
              <meta name="keywords" content={koorKeywords} />
              <meta name="author" content={koorAuthor}/>

              { /* Settings */}
              <html lang="en-us" />
              <meta name="color-scheme" content="only light" />
              <meta charSet="utf-8" />
            
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
              <meta name="robots" content="index,follow" />      
              
              {/* Others */}
              {/* <link rel="koorIcon" href={favicon} /> */}
          </Helmet>
    );
  }
export default KoorMetaTags;