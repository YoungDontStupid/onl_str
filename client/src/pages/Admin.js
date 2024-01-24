import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateCategory from '../components/modals/CreateCategory';
import CreateFood from '../components/modals/CreateFood';

const Admin = () => {
  const [categoryVisible, setCategoryVisible] = useState(false)
  const [foodVisible, setFoodVisible] = useState(false)

  return (
    <Container className='d-flex flex-column'>
         <h1 className='m-auto'>Панель менеджера</h1>
         <Button onClick={()=> setFoodVisible(true)} variant='outline-dark' className='mt-4 p-2 m-between'>Добавить товар</Button>
        <Button onClick={()=> setCategoryVisible(true)} variant='outline-dark' className='mt-4 p-2 m-between'>Добавить категорию</Button>
        <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
        <CreateFood show={foodVisible} onHide={() => setFoodVisible(false)}/>
    </Container>
  );
}

export default Admin;
