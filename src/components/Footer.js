import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgb(224, 217, 231)", padding: "1rem" }}>
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="col-span-2 ...">
          <h1 style={{fontSize:'larger', fontWeight:'500', borderBottom:'1px solid', margin:'1rem'}}>RE/MAX Canada Corporate Office :</h1>
            <ul style={{listStyle:'disc', fontSize:'14px'}}>
            <li>639 Queen Street West, 3rd Floor Toronto, ON M5V 2B7</li>
            <li>#340 1060 Manhattan Drive Kelowna, BC V1Y 9X9</li>
            </ul>
          </div>

          <div class="row-span-2 col-span-2 ...">
          <h1 style={{fontSize:'larger', fontWeight:'500', borderBottom:'1px solid', margin:'1rem'}}>Contact us:</h1>
            <ul style={{listStyle:'disc', fontSize:'14px'}}>
            <li>Western Canada Phone: 250-860-3628 </li>
            <li>Ontario Atlantic Phone: 905-542-2400</li>
            </ul>
          </div>

          <div class="row-span-3 ...">
          <p style={{fontSize:'14px', padding:'3rem'}}>
          Copyright © 2023 RE/MAX.<br /> All rights reserved. The trademarks MLS®,
          Multiple Listing Service® and the associated logos identify
          professional services rendered by REALTOR® members of CREA to effect
          the purchase, sale and lease of real estate as part of a cooperative
          selling system. Each Office Independently Owned and Operated.
        </p>
          </div>
        </div>
    </div>
  );
};

export default Footer;
