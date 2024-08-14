import React from 'react'
import '../styles/Pregnancy.css'
import pregnancyback from '../images/pregnancyback.jpg'
import saffronmilk1 from '../images/saffronmilk1.png'
import saffronfood1 from '../images/saffronfood1.jpg'

function Pregnancy() {
  return (
    <div className='pu_main'>
        <div className='pu_div1' style={{backgroundImage:`url(${pregnancyback})`}}>
            <h1>PREGNANCY USES</h1>
            <p>Saffron, derived from the crocus flower (Crocus sativus), is one of the most expensive spices in the world, prized for its vibrant color, unique aroma, and potential medicinal properties.</p>
        </div>
        <div className='pu_div2'>
            <h1>POTENTIAL BENEFITS</h1>
            <div>
                <h1>Mood Regulation</h1>
                <p>Saffron’s Potential: Compounds like crocin and safranal in saffron may influence brain chemicals such as serotonin and dopamine, which play key roles in regulating mood. These compounds can promote emotional stability and a sense of well-being.</p>
                <p>The Challenge: Pregnancy hormones like estrogen and progesterone fluctuate wildly, often leading to mood swings, anxiety, and even depression. These hormonal changes can affect neurotransmitter levels in the brain, impacting mood regulation.</p>
            </div>

            <div>
                <h1>Digestive Support</h1>
                <p>Common Concerns: Pregnancy can cause nausea (morning sickness), indigestion, constipation, and bloating due to hormonal changes and pressure from the growing uterus. These digestive issues can be uncomfortable and affect overall well-being.</p>
                <p>Saffron’s Role: Saffron is thought to stimulate the production of digestive enzymes, which help break down food, and bile, which aids in fat digestion. This stimulation can potentially ease nausea and improve digestion, reducing symptoms like bloating and constipation.</p>
            </div>

            
            <div>
                <h1>Iron Boost</h1>
                <p>Why Iron Matters: Iron is crucial for producing hemoglobin, the protein in red blood cells that carries oxygen throughout the body. Pregnant women need extra iron to support increased blood volume and supply oxygen to the growing baby.</p>
                <p>Saffron’s Contribution: While saffron is not a primary source of iron, it does contain a small amount that can contribute to overall dietary intake. When combined with iron-rich foods like lean meats, legumes, and leafy greens, saffron can help enhance iron absorption and support maternal and fetal health.</p>
            </div>

            
            <div>
                <h1>Sleep Enhancement</h1>
                <p>Sleep Disruptions: Common during pregnancy due to hormonal changes, physical discomfort, and anxiety. Good sleep is essential for maternal health and fetal development.</p>
                <p>Saffron’s Soothing Effect: Saffron’s mild sedative properties, possibly due to its influence on neurotransmitters, may promote relaxation and improve sleep quality, helping pregnant women get the rest they need.</p>
            </div>
        </div>
        <div className='pu_div2'>
            <h1>DOSAGE & PRECAUTIONS</h1>
            <div>
                <h1>First Trimester Caution</h1>
                <p>The first trimester is a crucial period of fetal development, with rapid growth and organ formation.</p>
                <p>During this time, it is recommended to avoid saffron entirely or use it only under very close medical supervision, if at all, to minimize any potential risks.</p>
            </div>
            <div>
                <h1>Quality is Paramount</h1>
                <p>Source saffron from reputable brands with certifications to ensure authenticity and purity, as adulterated saffron can be harmful.</p>
                <p>Look for vibrant red threads with a slightly yellowish tip and a distinct, sweet aroma to identify high-quality saffron.</p>
            </div>
            <div>
                <h1>Personalized Guidance is Non-Negotiable</h1>
                <p>Always consult your doctor or a registered dietitian before adding saffron to your diet to ensure it’s safe for your specific situation.</p>
            </div>

        </div>
        <div className='pu_div4'>
            <h1>Incorporating Saffron Wisely</h1>
            <div>
                
            <div>
                <img className='pu_img1' src={saffronmilk1} alt="" />
                <h1>SAFFRON MILK</h1>
                <p>A comforting and flavorful way to enjoy saffron’s potential benefits. To make saffron milk, add a few strands of saffron to warm milk and let it steep for a few minutes before drinking.</p>
            </div>

            <div>
            <img className='pu_img1' src={saffronfood1} alt="" />

                <h1>Culinary Uses</h1>
                <p>Add a pinch of saffron to enhance the taste and color of various dishes like rice, soups, stews, or desserts. Saffron pairs well with both sweet and savory recipes.</p>
            </div>
            </div>

        </div>
        <div className='pu_div4'> 
            <h1>ESSENTIAL REMINDERS</h1>
            <div>
            <div>
                <h1>Saffron is Not a Cure-All</h1>
                <p>It should complement, not replace, a healthy pregnancy diet, prenatal vitamins, and regular medical care.</p>
            </div>
            <div>
                <h1>More Research is Needed</h1>
                <p>While saffron shows promise, more scientific evidence is needed to fully understand its benefits and safety during pregnancy.</p>
            </div>
            <div>
                <h1>Be Observant</h1>
                <p>Monitor for any side effects such as allergic reactions, dizziness, or digestive upset. If you experience anything unusual, discontinue use and contact your doctor immediately</p>
            </div>
            </div>
        </div>
        <div className='pu_div5'>
            <p>Saffron holds potential as a valuable addition to a healthy pregnancy when used carefully and under the guidance of a healthcare professional. Remember, moderation, quality sourcing, and open communication with your doctor are essential for safely navigating the use of saffron during this special time.</p>
        </div>

    </div>
  )
}

export default Pregnancy