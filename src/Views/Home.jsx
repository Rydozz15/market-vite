import { Container, Row, Col, FloatingLabel, Form, Card } from "react-bootstrap";
import { useEffect, useState } from 'react';
import CardProducto from '../Components/CardProducto'

const arrayFiltrado = [
    {
        id: "1",
        nombre: "Neumatico",
        descripcion: "Medida 295/80 R22.5",
        marca: "Nexen",
        sku: "302247",
        precio: 25000,
        stock: 10,
        nuevousado: "usado",
        img: "https://www.ceadechile.cl/images/img/blog/neumaticos-elementos-seguridad.jpg"
    },
    {
        id: "2",
        nombre: "Alternador",
        descripcion: "Alternador 3 pines (inyeccion delphi)",
        marca: "Unipoint",
        sku: "873766",
        precio: 80000,
        stock: 3,
        nuevousado: "usado",
        img: "https://www.autofacil.es/wp-content/uploads/2021/05/alternador2.jpg"
    }
]

const Home = () => {
    const [arrayProductos, setArrayProductos] = useState([]);
    const [name, setName] = useState("");

    // Al ingresar patron de busqueda va a consultar
    const buscarProductos = (e) => {
        setName(e.target.value)

        const listaFiltrada = arrayFiltrado.filter(obj => obj.nombre.toLowerCase().includes(name))
        setArrayProductos(listaFiltrada)
    }

    useEffect(() => {
        setArrayProductos(arrayFiltrado);
    }, []);

    return (
        <Container>
            <Row className="d-flex align-items-center">
                <Col lg={3} md={3} sm={12}>
                    <h3>Market Place</h3>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <FloatingLabel
                        controlId="IdBusqueda"
                        label="Busqueda por Nombre:"  >
                        <Form.Control
                            type="text"
                            value={name}
                            size="sm"
                            onChange={buscarProductos}
                        />
                    </FloatingLabel>

                </Col>
            </Row>

            <Row className="p-2">
                <Card >
                    <Card.Header> <b>Productos </b></Card.Header>

                    <Row className='mt-2'>
                        {arrayProductos.length > 0
                            ? arrayProductos.map((item) => (
                                <Col key={item.id} className='ms-2'>
                                    <CardProducto item={item} accion="Agregar"/>
                                </Col>
                            ))
                            : <div>No hay datos</div>}
                    </Row>

                </Card>
            </Row>
        </Container>
    );
};
export default Home