import React , {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import {
    ViewTitle,
    BlockButton1,
    PostInputDiv,
} from './../style/styleValues'

import {
    postStringing,
    selectDisplayedError,
} from './../store/appSlice'

const PostStringing = () => {

    const dispatch = useDispatch()

    const [data,setData] = useState({
        raquet:'1',
        date: new Date().toISOString().slice(0,16),
        strings: 'PolyTour Rev 1.25mm',
        weight: '24',
        place: 'AffiTennis',
    })

    const error = useSelector(selectDisplayedError)

    const handleSubmit = () => {
        const postData = {...data,date:data.date.replace('T',' ')}
        dispatch(postStringing( postData ))
    }

    return (
        <div>
            <ViewTitle>Add stringing</ViewTitle>
            <div style={{padding:20}}>
                <PostInputDiv>
                    <span>Raquet</span>
                    <Form.Select aria-label="Default select example" onChange={(e)=>setData({...data,raquet:e.currentTarget.value})} value={data.raquet}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </PostInputDiv>
                <PostInputDiv>
                    <span>Strings</span>
                    <InputGroup>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            onChange={(e)=>setData({...data,strings:e.currentTarget.value})}
                            value={data.strings}
                        />
                    </InputGroup>
                </PostInputDiv>
                <PostInputDiv>
                    <span>Date</span>
                    <InputGroup>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            type="datetime-local"
                            onChange={(e)=>setData({...data,date:e.currentTarget.value})}
                            value={data.date}
                        />
                    </InputGroup>
                </PostInputDiv>
                <PostInputDiv>
                    <span>Weight</span>
                    <InputGroup>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            type="number"
                            step="1"
                            min="20"
                            max="25"
                            onChange={(e)=>setData({...data,weight:e.currentTarget.value})}
                            value={data.weight}
                        />
                    </InputGroup>
                </PostInputDiv>
                <PostInputDiv>
                    <span>Place</span>
                    <InputGroup>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            onChange={(e)=>setData({...data,place:e.currentTarget.value})}
                            value={data.place}
                        />
                    </InputGroup>
                </PostInputDiv>
                <br />
                <BlockButton1 onClick={handleSubmit}>
                    Confirm
                </BlockButton1>

                { error }
            </div>
            

        </div>
    );
}

export default PostStringing
