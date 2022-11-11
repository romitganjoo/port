/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Anti-Spoofing Door Lock Using Face Recognition and Blink Detection",
    link: "https://ieeexplore.ieee.org/document/9358795",
    authors:
      "Romit Ganjoo, Anjali Purohit",
    conferences:
      "IEEE 2021 6th International Conference on Inventive Computation Technologies (ICICT)",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/as.png",
    citation: {
      vancouver:
        "R. Ganjoo and A. Purohit, Anti-Spoofing Door Lock Using Face Recognition and Blink Detection, 2021 6th International Conference on Inventive Computation Technologies (ICICT), 2021, pp. 1090-1096, doi: 10.1109/ICICT50816.2021.9358795."},
    abstract:
      "Computer vision has become a highly evolving field in recent years, dealing with methods for obtaining, processing, examining, and understanding digital images. Human face recognition in computer vision has a vital role to play in security and surveillance, and the mechanisms for increasing the security levels are strengthening day by day. The existing human face recognition system has been enhanced by introducing an anti-spoofing mechanism which will help to stop a nefarious person to intentionally get around with the system. This article focuses on an approach to detect a human face using texture analysis which includes computing a Histogram of Gradients (HOG) over a region of the face and then uses Support Vector Machines (SVMs) to recognize a face. A blink detection mechanism used in this article ensures the liveliness of the person, making the system more reliable. A Raspberry Pi module is used in implementing the work involved in this paper and the programming is done in Python using libraries like OpenCV and NumPy. This model can achieve a maximum accuracy of 92.68% and achieves optimal results during the afternoon, taking a total of 9.89 seconds for face recognition and blink detection.",
    absbox: "absPopup1",
  },

  {
    title: "Mitigating Poisoning Attacks in Federated Learning",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-7167-8_50",
    authors:
      "Romit Ganjoo, Mehak Ganjoo, Madhura Patil",
    conferences:
      "Innovative Data Communication Technologies and Application",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/fl.jpg",
    citation: {
      vancouver:
      "Ganjoo, R., Ganjoo, M., Patil, M. (2022). Mitigating Poisoning Attacks in Federated Learning. In: Raj, J.S., Kamel, K., Lafata, P. (eds) Innovative Data Communication Technologies and Application. Lecture Notes on Data Engineering and Communications Technologies, vol 96. Springer, Singapore. https://doi.org/10.1007/978-981-16-7167-8_50."},
    abstract:
      "With the world transitioning into the era of artificial intelligence, a prodigious amount of data is being gathered and preserved in different silos. The excessive collection of data has resulted in various threats and privacy issues. This has questioned the use of conventional approaches of Artificial Intelligence and led to the development of a robust approach to processing and using data. Federated Learning, which trains an algorithm across many decentralized servers storing data without exchanging them, has shown promising results under this new reality. But the extant Federated learning mechanism has shown to possess some vulnerabilities that can be exploited to bargain data privacy. Federated Learning schemes have been subject to poisoning attacks. It is therefore of extremely high importance to showcase the prevailing flaws in the current design. This paper discusses the unique characteristics and challenges of federated learning, provides a review of the topic by highlighting two major poisoning attacks in the Federated Learning; and provides a method to mitigate these poisoning attacks.",
    absbox: "absPopup2",
  },

  {
    title:
      "Deep Learning–Based Financial Forecasting of NSE Using Sentiment Analysis",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003307822-18/deep-learning%E2%80%93based-financial-forecasting-nse-using-sentiment-analysis-aditya-agarwal-romit-ganjoo-harsh-panchal-suchitra-khojewe?context=ubx&refId=50f92221-7743-4bdb-8700-de52ea0afe03",
    authors: "Aditya Agarwal, Romit Ganjoo, Harsh Panchal, Suchitra Khojewe",
    conferences:
      "Recurrent Neural Networks",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/sm.png",
    citation: {
      vancouver:
        "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "TOver the years the stock market of most developed and developing countries has been a popular place for investors all over the world to invest their money for substantial growth and safety. In India, one of the fastest-growing economies, in just 30 years the National Stock Exwchange (NSE), one of its popular stock markets, has recorded an average growth of up to 20 percent. Despite the overall good returns, many investors have faced serious losses in the past, the most common reason for those being the inability to predict basic market situations, including current economic situation and policies of the government, among others, as well as not having a good knowledge about the history of the company they are investing in. Looking at these problems, in this chapter we have proposed a solution of prediction of stock market future considering two important aspects: (1) price prediction of stock using historical data and (2) sentiment analysis of public opinion and news headlines through which an investor will be able to get a good idea about when and where to invest their money. For price prediction of stock using historical data we have preprocessed our data with multiple feature extraction and selection algorithms, and then have used multiple regression machine learning algorithms decision tree regressor, random forest regressor and gradient boosting regression and deep learning algorithm LSTM for having overall experiment. Similarly for sentiment analysis we have used two different types of word-embedding algorithm and then used classification machine learning algorithm logistic regression and support vector machine. Each machine learning algorithm is then tuned with different hyperparameters GridSearchCV and RandomizedSearch CV for tuning algorithms to its maximum accuracy. After performing a complete experiment for price prediction using historical data, we found that LSTM performed much better than any other used algorithms, and for sentiment analysis we found logistic regression tuned with GridSearchCV to be the best performer.his is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,

      link,

      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${link}" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
