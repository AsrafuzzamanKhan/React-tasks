import React, { useEffect, useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');

    const [todos, setTodos] = useState([]);

    const [todosInfo, setTodosInfo] = useState([]);

    // const active = todos.filter(td => td.status === 'active')
    const handleClick = (val) => {

        setShow(val);
        // setShow(val.active)
    }
    const onInputChange = e => {
        e.preventDefault();
        const field = e.target.name;
        const value = e.target.value;
        const newTodo = { ...todosInfo }
        newTodo[field] = value;
        console.log('new todo', newTodo);
        setTodosInfo(newTodo)

    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, todosInfo])
        setTodosInfo('')
        console.log(todos.length);
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1 </h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={onFormSubmit}>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name='name' onBlur={onInputChange} required />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name='status' onBlur={onInputChange} required />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos?.map((todo, i) => (<tr key={i}>
                                <th>{todo?.name}</th>
                                <th>{todo?.status}</th>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;