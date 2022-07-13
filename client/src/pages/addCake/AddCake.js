import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase'
import './addCake.css'
import Sidenav from '../../components/sidenav/Sidenav'
import { axiosInstance } from '../../config'
import { FaPlusCircle } from "react-icons/fa";

const AddCake = () => {
    const [descCnt, setDescCnt] = useState(0)
    const [sizeCnt, setSizeCnt] = useState(0)

    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0)
    const [imgPreview, setImgPreview] = useState([])

    const navigate = useNavigate();
    let name = useRef();
    let flavour = useRef();
    let tags = useRef();

    const setsDescriptionValues = (e) => {
        // e.preventDefault();
        let descriptionObj = {};
        for (let i = 0; i < descCnt; i++) {
            let key = document.getElementById(`dec_key${i}`).value;
            let val = document.getElementById(`dec_val${i}`).value;

            descriptionObj = {
                ...descriptionObj,
                [key]: val
            }

        }
        return descriptionObj;
    }

    const setSizeAndPrizeValues = (e) => {
        // e.preventDefault();
        let sizeAndPrizeObj = {};
        for (let i = 0; i < sizeCnt; i++) {
            let key = document.getElementById(`size${i}`).value;
            let val = document.getElementById(`prize${i}`).value;

            sizeAndPrizeObj = {
                ...sizeAndPrizeObj,
                [key]: val
            }

        }
        return sizeAndPrizeObj;
    }


    const handleFormsubmit = (e) => {
        e.preventDefault();
        setsDescriptionValues()
        setSizeAndPrizeValues()
        setCakeBodyValues()
    }


    const addField = (e) => {
        e.preventDefault();
        // console.log("Adding");

        let cnt = descCnt;
        let elem = `
        <div class="desc_inputs" >
        <input type="text" class="cake_input desc_key"  id=${"dec_key" + cnt} required    />
        <input type="text" class="cake_input desc_value"  id=${"dec_val" + cnt} required />
        </div>            
        `
        let fields = document.getElementById('fields');

        fields.innerHTML += elem;
        cnt++;
        setDescCnt(cnt);
    }

    const addSizeAndPrizeField = (e) => {
        e.preventDefault();
        // console.log("Adding");

        let cnt = sizeCnt;
        let elem = `
        <div class="desc_inputs" >
        <input type="text" class="cake_input desc_key"  id=${"size" + cnt}    required/>
        <input type="text" class="cake_input desc_value"  id=${"prize" + cnt}   required />
        </div>            
        `
        let sizeAndPrize_fields = document.getElementById('sizeAndPrize_fields');

        sizeAndPrize_fields.innerHTML += elem;
        cnt++;
        setSizeCnt(cnt);
    }

    const handleChange = e => {
        e.preventDefault();
        setImages([]);
        setUrls([]);
        let prev_img = [];
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            setImages((prevState) => [...prevState, newImage]);
            prev_img = [...prev_img, URL.createObjectURL(e.target.files[i])]
        }
        setImgPreview(prev_img)
    }

    const handleUpload = (e) => {
        e.preventDefault()
        const promises = [];

        images.map((image) => {
            const storageRef = ref(storage, `/files/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);

            promises.push(uploadTask)
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
                    setProgress(progress)
                },
                error => {
                    console.log(error);
                    alert('Failed to upload Please try again later')
                },
                async () => {
                    await getDownloadURL(uploadTask.snapshot.ref)
                        .then(url => {
                            // console.log(url);
                            setUrls((prevState) => [...prevState, url]);
                        })
                }
            )
        })
        Promise.all(promises)
            .then(() => {
                alert("All images uploaded")
                // console.log(images);
                // console.log(urls);
            })
            .catch((err) => console.log(err))

    }
    // console.log(urls);

    function isEmpty(object) {
        for (const property in object) {
            return false;
        }
        return true;
    }
    const sendCake = async (cake_body) => {
        try {
            if (isEmpty(cake_body) === false) {
                // console.log("Sending this");
                // console.log(cake_body);
                const res = await axiosInstance.post('/cake/newcake', cake_body)
                if (res.status === 200) {
                    // console.log(res);
                    alert("cake added successfully")
                    navigate('/dashboard/allProducts')
                }
            }
        } catch (error) {
            console.log(error);
            window.alert('Failed to Add Try again!')
        }
    }

    const setCakeBodyValues = () => {
        // makeDescriptionObject();
        let description = setsDescriptionValues()
        let sizeAndPrice = setSizeAndPrizeValues()

        let cake = {
            name: name.current.value,
            description: description,
            flavour: flavour.current.value,
            sizeAndPrice: sizeAndPrice,
            images: urls,
            tags: [tags.current.value]
        }
        // console.log(cake);

        sendCake(cake)
    }

    return (
        <>
            <Sidenav />
            <h1 className="add_cake_title">Add Cake</h1>
            <div className="addCake_container">

                <form action="" className="cake_form" onSubmit={handleFormsubmit}>

                    {/* Name */}
                    <div className="input">
                        <label className="cake_label">Name</label>  <input type="text" className="cake_input"
                            required ref={name} />
                    </div>

                    {/* Description */}
                    <div className="input description_container">
                        <h2 className="cake_label cake_title_heading">Description</h2>
                        <button className="addBtn" onClick={addField}>Add  <FaPlusCircle className="add_icon" /></button>

                        <div id="fields">
                            <div className="desc_inputs">
                                {/* Add Button will add two inputs here  */}
                                {/* <input type="text" className="cake_input" />
                                <input type="text" className="cake_input" /> */}
                            </div>
                        </div>
                        {/* <button className="desc_done_btn" onClick={setsDescriptionValues}>Done</button> */}
                    </div>

                    {/* Size And Prize*/}
                    <div className="input description_container">
                        <h2 className="cake_label cake_title_heading">Size And Prize</h2>
                        <button className="addBtn" onClick={addSizeAndPrizeField
                        }>Add  <FaPlusCircle className="add_icon" /></button>
                        <div id="sizeAndPrize_fields">
                            <div className="desc_inputs">

                            </div>
                        </div>
                        {/* <button className="desc_done_btn" onClick={setSizeAndPrizeValues}>Done</button> */}
                    </div>

                    {/* Flavour */}
                    <div className="input">
                        <label className="cake_label">Flavour</label>  <input type="text" className="cake_input" required ref={flavour} />
                    </div>

                    {/* Cake Images Upload */}
                    <div className="input description_container">
                        <h2 className="cake_title_heading">Upload Image</h2>
                        <progress value={progress} max="100" className="progress_bar" />


                        <input type="file" multiple onChange={handleChange} className="input_img" />

                        <div className={`${imgPreview.length > 0 ? `image_continer` : 'image_continer_hide'}`}>
                            {
                                imgPreview.map((sr) => {
                                    return <img src={sr} alt="." className="up_img" />
                                })

                            }

                        </div>
                        <button onClick={handleUpload} id="submit_button" className={`submit_btn ${images.length > 0 ? 'submit_btn_active' : 'submit_btn_hide'}`}>Upload</button>
                    </div>

                    {/* Tags */}
                    <div className="input">
                        <label className="cake_label">Tags</label>  <input type="text" className="cake_input" required ref={tags} />
                    </div>

                    <input type="submit" value="Submit" className="submit_form" onSubmit={handleFormsubmit} />

                </form>
            </div>
        </>
    )
}

export default AddCake