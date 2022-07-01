import { Container, Form, Row, Button, Col, ListGroup, Badge } from "react-bootstrap";
import { useState } from "react";

const GetWeather = () => {
    const [city, setCity] = useState("");

    const [weather, setWeather] = useState([]);

    const fetchWeatherResult = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af6b82351c809063d411323d680d0522`
            );
            if (response.ok) {
                const data = await response.json();
                setWeather(data);
                setCity("")
                console.log(data)
            } else {
                console.log("Error in fetching API");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <div className="main-div">
                        <h1 className="heading">Welcome to Weather App</h1>
                        <Form className="text-center">
                            <Form.Label>
                                <p className="heading">Enter the City Name Below</p>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <div className="text-center mt-5">
                                <Button variant="secondary" onClick={fetchWeatherResult}>
                                    Search
                                </Button>
                            </div>
                        </Form>
                        <div>
                            {weather.main && (
                                <ListGroup className="mt-3">
                                    <ListGroup.Item><b>Current Temperature: </b> <Badge pill variant="dark">{(weather.main.temp - 273.15).toFixed(2)} ºC{" "}</Badge> </ListGroup.Item>
                                    <ListGroup.Item><b>Sunrise: </b> <Badge pill variant="dark">{new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</Badge></ListGroup.Item>
                                    <ListGroup.Item><b>Sunset: </b> <Badge pill variant="dark">{new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}</Badge></ListGroup.Item>
                                    <ListGroup.Item><b>Feels like: </b> <Badge pill variant="dark">{(weather.main.feels_like - 273.15).toFixed(2)} ºC{" "}</Badge></ListGroup.Item>
                                    <ListGroup.Item><b>Humidity: </b> <Badge pill variant="dark">{weather.main.humidity} %</Badge></ListGroup.Item>
                                    <ListGroup.Item><b>Maximum Temperature: </b> <Badge pill variant="dark">{(weather.main.temp_max - 273.15).toFixed(2)} ºC{" "}</Badge></ListGroup.Item>
                                    <ListGroup.Item><b>Minimum Temperature: </b> <Badge pill variant="dark">{(weather.main.temp_min - 273.15).toFixed(2)} ºC{" "}</Badge></ListGroup.Item>
                                </ListGroup>
                            )}
                        </div>
                    </div>
                </Col>
            </Row >
        </Container >

    );
};

export default GetWeather;