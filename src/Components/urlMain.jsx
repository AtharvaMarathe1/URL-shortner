// import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./homePage.module.css"

const UrlMain = () => {
    const [input, setInput] = useState("");
    const [shorte, setShort] = useState("");
    const [code, setCode] = useState("");
    // const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "https://urlshortner-backend-dmn3.onrender.com/create";
        try {
          const postResponse = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: input }),
        });

          if (!postResponse.ok) {
            throw new Error(`Response status: ${postResponse.status}`);
          }
    
          const postJson = await postResponse.json();
          console.log("POST RESP", postJson);
          const sh = postJson.short;
          setCode(postJson);
         
//
        const getUrl = `https://urlshortner-backend-dmn3.onrender.com/${sh}`;
        
          const response = await fetch(getUrl);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
        
          const json = await response.json();
          console.log(json);
          setShort(json)
          // setShort(postJson.short);
        } catch (error) {
          console.error(error.message);
        }
        
      };
      

    // }

    return (
        <div className={styles.text}>
          {/* <div> */}
            <h1>URL SHORTEN JI</h1>
            <p>tussi delete "https://", jaruri hundi</p>
            {/* </div> */}
            <div>
            <label htmlFor="" className={styles.text2}>Input URL: </label>
            <input type="text" name="" id={styles.inpp} value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Submit</button>

            {shorte  && code && (
                <div className={styles.shorten}>
                    <h2 className={styles.text3}>Shortened URL: </h2>
                    {/* console.log({short.url}); */}
                    
                    <a href={`https://www.yugagarwal.tech/s/${code?.short}`} target="_blank">https://www.yugagarwal.tech/s/{code?.short}</a>
                </div>
            )}
        </div>
    );
}
export default UrlMain