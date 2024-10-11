import React, { useEffect, useState } from "react";
import { imgDB, txtDB } from "../../firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import "./CreatePost.css"
import Post from "./Post"

const CreatePost = () => {
    const user = useSelector((state) => state.data.user.user);
    const [txt, setTxt] = useState('')
    const [img, setImg] = useState('')
    const [data, setData] = useState([])


    const handleUpload = (e) => {
        console.log(e.target.files[0])
        const imgs = ref(imgDB, `Imgs/${v4()}`)
        uploadBytes(imgs, e.target.files[0]).then(data => {
            console.log(data, "imgs")
            getDownloadURL(data.ref).then(val => {
                setImg(val)
            })
        })
    }

    const handleClick = async () => {
        const valRef = collection(txtDB, 'txtData')
        await addDoc(valRef, { txtVal: txt, imgUrl: img })
        alert("Data added successfully")
    }

    const getData = async () => {
        const valRef = collection(txtDB, 'txtData')
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }))
        setData(allData)      
    }

    useEffect(() => {        
        getData()
    }, [data])    

    return (
        <div>
            <div className="form-container">
                <input type="text" placeholder="Enter text" onChange={(e) => setTxt(e.target.value)} /><br />
                <input type="file" onChange={(e) => handleUpload(e)} /><br /><br />
                <button onClick={handleClick}>Add</button>
            </div>


            <div className="timeline">
                <div className="timeline__left">
                    <div className="timeline__posts">
                        {data.map((post) => (
                            <Post
                                user={user.username}
                                text={post.txtVal}
                                postImage={post.imgUrl}

                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CreatePost;
