import { Card, Button, Row, Col } from 'react-bootstrap'
import { Save } from "lucide-react";

const CardProducto = ({ item, accion }) => {

  return (
    <div>
      <Card style={{ width: '20rem' }} >
        <Card.Img variant='top' src={item.img} style={{ width: '6rem', height: '6em' }} />
        <Card.Body>
          <Card.Title className='text-capitalize text-center'> <b>{item.nombre} </b>  </Card.Title>
          <hr />
          <p><b>{item.descripcion} </b></p>
          <Row>
            <Col >Marca: {item.marca}</Col>
          </Row>
          <Row>
            <Col >SKU: {item.sku}</Col>
          </Row>
          <Row>
            <Col >Precio: {item.precio}</Col>
          </Row>
          <Row>
            <Col >Stock: {item.stock}</Col>
          </Row>
          <Row>
            <Col >Estado: {item.nuevousado}</Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end">
              {accion == 'Modificar' ?
                <Button className='p-1 m-2 ' variant='outline-primary' size='md' > <Save /> Modificar</Button>
                :
                <Button className='p-1 m-2 ' variant='outline-primary' size='md' > <Save /> Añadir </Button>}
            </Col>

          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardProducto
