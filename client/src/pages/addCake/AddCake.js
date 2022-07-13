import React, { useRef, useState } from 'react'
import './addCake.css'
import Sidenav from '../../components/sidenav/Sidenav'

const AddCake = () => {
    const [descCnt, setDescCnt] = useState(0)

    const [desc_keys, setDesc_keys] = useState([])
    const [desc_values, setDesc_values] = useState([])


    let name = useRef();

    const setsDescriptionValues = () => {
        let keys = [], values = []
        for (let i = 0; i < descCnt; i++) {
            let key = document.getElementById(`dec_key${i}`).value;
            let val = document.getElementById(`dec_val${i}`).value;

            keys.push(key)
            values.push(val)

        }
        setDesc_keys(keys)
        setDesc_values(values)
    }
    console.log(desc_keys);
    console.log(desc_values);


    const handleFormsubmit = (e) => {
        e.preventDefault();

    }

    const addField = (e) => {
        e.preventDefault();
        // console.log("Adding");

        let cnt = descCnt;
        let elem = `
        <div class="desc_inputs" >
        <input type="text" class="cake_input desc_key"  id=${"dec_key" + cnt}  />
        <input type="text" class="cake_input desc_value"  id=${"dec_val" + cnt} />
        </div>            
        `
        let fields = document.getElementById('fields');

        fields.innerHTML += elem;
        cnt++;
        setDescCnt(cnt);
    }
    return (
        <>
            <Sidenav />
            <div className="addCake_container">
                <h1>Add Cake</h1>

                <form action="" onSubmit={handleFormsubmit}>
                    <div className="input">
                        <label className="cake_label">Enter name</label>  <input type="text" className="cake_input" ref={name} />
                    </div>
                    <div className="input description_container">
                        <label className="cake_label">Description</label>
                        <button className="addBtn" onClick={addField}>Add </button>
                        <div id="fields">
                            <div className="desc_inputs">
                                {/* Add Button will add two inputs here  */}
                                {/* <input type="text" className="cake_input" />
                                <input type="text" className="cake_input" /> */}
                            </div>
                        </div>
                        <button className="desc_done_btn" onClick={setsDescriptionValues}>Done</button>

                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default AddCake