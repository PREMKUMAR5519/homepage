import React, { useState } from 'react'
import '../styles/CulinaryUSe.css'
import culinaryback from "../images/culinaryback.png"
import cb from "../images/cb.jpg"

function CulinaryUse() {
    const [dish,setDish] =useState("biriyani")
    function handleClick(val){
        setDish(val)
        
    }
  return (
    <div className='culinary_main'>
        <div className='culinary_div1' style={{backgroundImage:`url(${culinaryback})`}}>
            <img src={culinaryback} alt="" />
            <div className='culinary_div12'>
                <h1>CULINARY USES</h1>
            </div>
        </div>
        <div className='radio_btton'>
            <div>
                
                <p className={`radio_btn ${dish=='biriyani'?"true":""}`} onClick={()=>handleClick("biriyani")}>BIRIYANI</p>
                <p  className={`radio_btn  ${dish=='pilafs'?"true":""}`}  onClick={()=>handleClick("pilafs")} >PILAFS</p>
                <p  className={`radio_btn ${dish=='stews'?"true":""}`}  onClick={()=>handleClick("stews")} >STEWS</p>
                <p   className={`radio_btn ${dish=='icecream'?"true":""}`}  onClick={()=>handleClick("icecream")}  >ICE CREAM</p>
                <p   className={`radio_btn ${dish=='gulabjamun'?"true":""}`}  onClick={()=>handleClick("gulabjamun")}  >GULAB JAMUN</p>
            </div>

        </div>
        {dish == "biriyani" &&(
            <>
                <div className='culinary_div2'>
                <h1>BIRIYANI</h1>
                <p>Saffron plays a significant role in Biryani, adding both flavor and visual appeal.</p>
                <div className='culinary_div21'>
                    <div>
                        <h1>FLAVOR</h1>
                        <p>Saffron adds a unique and subtle flavor to biryani. It has a slightly sweet, earthy taste that enhances the overall flavor profile of the dish.</p>
                    </div>
                    <div>
                        <h1>Aroma</h1>
                        <p>The aroma of saffron is distinct and can elevate the biryani with its warm, floral notes. This fragrance is often one of the first things people notice</p>
                    </div>
                    <div>
                        <h1>Color</h1>
                        <p>Saffron imparts a vibrant golden-yellow color to the rice and meat in the biryani. This color is visually appealing and contributes to the dish's richness and elegance.</p>
                    </div>
                </div>

            </div>
            <div className='culinary_div22'>
               <div className='culinary_div221'>
               <h1>HOW TO USE SAFFRON IN BIRYANI</h1>
                <div>
                    <h1>INFUSION</h1>
                    <p>Saffron threads are typically steeped in warm milk or water before being added to the biryani. This helps release the color and flavor. Just a few threads are usually enough to achieve the desired effect.</p>
                </div>
                <div>
                    <h1>LAYERING</h1>
                    <p>In biryani, saffron-infused liquid is often drizzled over the layers of rice and meat before the final cooking stage. This ensures that the saffron flavor and color are distributed evenly throughout the dish.</p>
                </div>
                <div>
                    <h1>QUANTITY</h1>
                    <p>Saffron is potent, so a small amount goes a long way. Typically, a pinch of saffron threads is used for a large pot of biryani.</p>
                </div>
               </div>
               <div className='culinary_div222'>
                <img src={cb} alt="" />

               </div>
            </div>
            <div className='culinary_div23'>
                <h1>TIPS</h1>
                <div>
                    <h1>QUALITY:</h1>
                    <p>The quality of saffron affects its flavor and color. Look for deep red threads that are dry and have a strong aroma.</p>
                </div>
                <div>
                    <h1>Avoid Overuse:</h1>
                    <p>Too much saffron can overpower the dish. Stick to a small quantity to maintain a balanced flavor.</p>
                </div>
               
            </div></>
        )}


        
        {dish =="pilafs"&&(<>
            <div className='culinary_div2'>
                <h1>Pilafs</h1>
                <p>Saffron plays a significant role in pilafs, adding both flavor and visual appeal. </p>
                <div className='culinary_div21'>
                    <div>
                        <h1>FLAVOR</h1>
                        <p>Saffron contributes a subtle, complex flavor to pilaf. Its unique, slightly sweet and earthy taste complements the other ingredients, adding depth and richness.</p>
                    </div>
                    <div>
                        <h1>Aroma</h1>
                        <p>The delicate, floral aroma of saffron can transform the aroma profile of a pilaf, making it more fragrant and inviting.</p>
                    </div>
                    <div>
                        <h1>Color</h1>
                        <p>Saffron imparts a warm golden-yellow hue to the rice in pilaf. This vibrant color enhances the visual appeal of the dish, making it look more appetizing and elegant.</p>
                    </div>
                </div>

            </div>
            <div className='culinary_div22'>
            <div className='culinary_div221'>

                <h1>HOW TO USE SAFFRON IN PILAF</h1>
                <div>
                    <h1>INFUSION</h1>
                    <p>Before adding saffron to your pilaf, steep the threads in a small amount of warm water or broth. This helps release the color and flavor. A few threads are usually sufficient for a pot of pilaf.</p>
                </div>
                <div>
                    <h1>LAYERING</h1>
                    <p>The saffron-infused liquid can be mixed into the pilaf either during the cooking process or just before serving. Stir it in to ensure even distribution of flavor and color.</p>
                </div>
                <div>
                    <h1>QUANTITY</h1>
                    <p>Saffron is potent, so use it sparingly. Even a small amount can have a significant impact on both the flavor and color of the pilaf.</p>
                </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className='culinary_div23'>
                <h1>TIPS</h1>
                <div>
                    <h1>QUALITY:</h1>
                    <p>Choose high-quality saffron for the best results. Look for threads that are deep red and have a strong, aromatic scent.</p>
                </div>
                <div>
                    <h1>Avoid Overuse:</h1>
                    <p>Since saffron is intense, a little goes a long way. Using too much can overpower the dish.</p>
                </div>
               
            </div></>)}



           {dish == "stews" &&(
            <>
             <div className='culinary_div2'>
                <h1>STEWS</h1>
                <p>Saffron can add a unique depth to stews, enhancing both flavor and color. </p>
                <div className='culinary_div21'>
                    <div>
                        <h1>FLAVOR</h1>
                        <p>Saffron introduces a subtle, complex taste to stews. Its delicate, slightly sweet, and earthy notes can enhance the overall flavor profile, complementing the other ingredients in the stew.</p>
                    </div>
                    <div>
                        <h1>Aroma</h1>
                        <p>The floral and warm aroma of saffron can make stews more fragrant and appealing. It adds a layer of richness that can elevate the dish’s sensory experience.</p>
                    </div>
                    <div>
                        <h1>Color</h1>
                        <p>Saffron imparts a golden-yellow hue to stews, giving them a visually appealing and rich appearance. This color can make the stew look more vibrant and appetizing.</p>
                    </div>
                </div>

            </div>
            <div className='culinary_div22'>
            <div className='culinary_div221'>

                <h1>HOW TO USE SAFFRON IN PILAF</h1>
                <div>
                    <h1>INFUSION</h1>
                    <p>To get the most out of saffron, steep the threads in a small amount of hot water or broth before adding them to the stew. This process helps to release the color and flavor. A pinch of saffron is usually sufficient for most stews.</p>
                </div>
                <div>
                    <h1>Incorporation</h1>
                    <p>Add the saffron-infused liquid to the stew at an appropriate stage of cooking, often near the end. This allows the saffron to blend well with the other flavors without being overcooked.</p>
                </div>
                <div>
                    <h1>QUANTITY</h1>
                    <p>Saffron is potent, so use it sparingly. A small amount goes a long way in both flavor and color.</p>
                </div>
            </div>
            <div className='culinary_div23'>
                <h1>TIPS</h1>
                <div>
                    <h1>QUALITY:</h1>
                    <p>The quality of saffron affects its flavor and color. Choose high-quality saffron threads that are deep red and aromatic for the best results.</p>
                </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1>Avoid Overuse:</h1>
                    <p>Since saffron is strong, using too much can overpower the stew. Stick to a small quantity to maintain balance.</p>
                </div>
               
            </div>
</>
           )}



            
            {dish =='icecream' &&(
                <>
                <div className='culinary_div2'>
                <h1>Saffron Infused Ice-cream</h1>
                <p>Saffron-infused ice cream is a luxurious treat that benefits from saffron in several ways</p>
                <div className='culinary_div21'>
                    <div>
                        <h1>FLAVOR</h1>
                        <p>Saffron imparts a unique, slightly sweet, and earthy flavor to ice cream. This complex taste can add depth and sophistication, making the ice cream stand out from more traditional flavors.</p>
                    </div>
                    <div>
                        <h1>AROMA</h1>
                        <p>Saffron adds a floral, warm aroma to ice cream. This pleasant scent can enhance the sensory experience, making each bite more aromatic and inviting.</p>
                    </div>
                    <div>
                        <h1>Color</h1>
                        <p>Saffron infuses a beautiful golden-yellow hue into the ice cream. This vibrant color makes the ice cream visually striking and adds an element of elegance.</p>
                    </div>
                </div>

            </div>
            <div className='culinary_div22'>
            <div className='culinary_div221'>

                <h1>HOW TO USE SAFFRON IN ICE CREAM</h1>
                <div>
                    <h1>INFUSION</h1>
                    <p>Start by steeping saffron threads in a small amount of warm milk or cream. This helps to release the color and flavor. Let it sit for about 10-15 minutes.</p>
                </div>
                <div>
                    <h1>Incorporation</h1>
                    <p>Strain the saffron-infused liquid and mix it into your ice cream base. This ensures an even distribution of flavor and color throughout the ice cream.</p>
                </div>
                <div>
                    <h1>QUANTITY</h1>
                    <p>Use saffron sparingly. A small pinch is usually enough to flavor and color a batch of ice cream. Too much saffron can overwhelm the flavor.</p>
                </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className='culinary_div23'>
                <h1>TIPS</h1>
                <div>
                    <h1>QUALITY:</h1>
                    <p>Choose high-quality saffron threads for the best results. Look for threads that are deep red and have a strong, aromatic scent.</p>
                </div>
                <div>
                    <h1>Avoid Overuse:</h1>
                    <p>: Ensure that the saffron flavor complements the other ingredients in the ice cream. It should enhance the overall taste without overpowering it.</p>
                </div>
               
            </div></>
            )}


          {dish== 'gulabjamun' &&(
            <>
              <div className='culinary_div2'>
                <h1>Gulab jamun</h1>
                <p>Saffron plays a special role in gulab jamun, a popular Indian sweet made from milk solids and sugar. </p>
                <div className='culinary_div21'>
                    <div>
                        <h1>FLAVOR</h1>
                        <p>Saffron adds a subtle, exotic flavor to gulab jamun. Its unique, slightly sweet, and earthy notes enhance the overall taste of the dessert, giving it a refined touch.</p>
                    </div>
                    <div>
                        <h1>AROMA</h1>
                        <p>: Saffron imparts a warm, floral aroma that elevates the sensory experience of gulab jamun. This aroma makes the dessert more inviting and enhances its appeal.</p>
                    </div>
                    <div>
                        <h1>Color</h1>
                        <p>Saffron infuses a beautiful golden hue into the syrup or the dough of gulab jamun. This vibrant color not only adds elegance to the dessert but also visually signifies its luxurious flavor.</p>
                    </div>
                </div>

            </div>
            <div className='culinary_div22'>
            <div className='culinary_div221'>

                <h1>HOW TO USE SAFFRON IN GULAB JAMUN</h1>
                <div>
                    <h1>INFUSION</h1>
                    <p>Soak saffron threads in a small amount of warm milk or water to release their color and flavor. Let it steep for about 10-15 minutes.</p>
                </div>
                <div>
                    <h1>Incorporation</h1>
                    <p>You can add the saffron-infused liquid to the sugar syrup in which the gulab jamun is soaked after frying. This allows the flavor and color to be absorbed into the dessert.</p>
                </div>
                <div>
                    <h1>QUANTITY</h1>
                    <p>Use saffron sparingly. A small pinch is usually enough to flavor and color a batch of gulab jamun without overwhelming the dessert.</p>
                </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className='culinary_div23'>
                <h1>TIPS</h1>
                <div>
                    <h1>QUALITY:</h1>
                    <p>: Opt for high-quality saffron threads for the best results. Look for threads that are deep red and aromatic.</p>
                </div>
                <div>
                    <h1>Avoid Overuse:</h1>
                    <p>Since saffron is potent, using too much can overpower the dessert. Stick to a small quantity to maintain balance.</p>
                </div>
               
            </div></>
          )}
    </div>
  )
}

export default CulinaryUse