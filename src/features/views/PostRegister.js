import React , {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import {
    ViewTitle,
    BlockButton1,
} from './../style/styleValues'

import {
    postRegister,
    selectDisplayedError,
} from './../store/appSlice'

const PostRegister = () => {

    const dispatch = useDispatch()

    const [data,setData] = useState({
        raquet:'1',
        desc:'',
        date: new Date().toISOString().slice(0,16),
        hours: '1',
        result: '1',
        cost: "0"
    })

    const error = useSelector(selectDisplayedError)

    const handleSubmit = () => {
        const postData = {...data,date:data.date.replace('T',' ')}
        dispatch(postRegister( postData ))
    }

    return (
        <div>
            <ViewTitle>Inserisci partita</ViewTitle>
            <div>
                <div>
                    <span>Racchetta</span>
                    <Form.Select aria-label="Default select example" onChange={(e)=>setData({...data,raquet:e.currentTarget.value})} value={data.raquet}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </div>
                <div>
                    <span>Descrizione</span>
                    <InputGroup>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            onChange={(e)=>setData({...data,desc:e.currentTarget.value})}
                        />
                    </InputGroup>
                </div>
                <div>
                    <span>Data</span>
                    <InputGroup>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            type="datetime-local"
                            onChange={(e)=>setData({...data,date:e.currentTarget.value})}
                            value={data.date}
                        />
                    </InputGroup>
                </div>
                <div>
                    <span>Ore giocate</span>
                    <InputGroup>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            type="number"
                            step="0.25"
                            min="1"
                            max="8"
                            onChange={(e)=>setData({...data,hours:e.currentTarget.value})}
                            value={data.hours}
                        />
                    </InputGroup>
                </div>
                <div>
                    <span>Risultato</span>
                    <Form.Select aria-label="Default select example"  onChange={(e)=>setData({...data,result:e.currentTarget.value})} value={data.result}>
                        <option value="1">Vittoria</option>
                        <option value="2">Sconfitta</option>
                        <option value="0">Pareggio o altro</option>
                    </Form.Select>
                </div>
                <div>
                    <span>Costo</span>
                    <InputGroup>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            type="number"
                            step="1"
                            min="0"
                            onChange={(e)=>setData({...data,cost:e.currentTarget.value})}
                            value={data.cost}
                        />
                    </InputGroup>
                </div>

                <BlockButton1 onClick={handleSubmit}>
                    Aggiungi
                </BlockButton1>

                { error }
            </div>
            

        </div>
    );
}

export default PostRegister
