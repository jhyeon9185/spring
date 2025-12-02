import { useRef, useState } from "react";

const Body2 = ( ) =>{

    const [text, setText] = useState("");

    const textRef = useRef();
    

    const handelOnChange = (e) =>{
        setText(e.target.value);

        if( text.length < 5 ){
            textRef.current.focus();

        }else{
            alert(text);
            textRef.current.value = "";
        }

    }

    const handelOnClick = () => {
        alert(text);
        textRef.current.value = "";

    }

    return (
        <div className="body">
            <input ref= {textRef} type="text" value={text} onChange={handelOnChange}/>
            <button onClick={handelOnClick}>작성완료</button><br/>
        </div>
    );
}

export default Body2;

