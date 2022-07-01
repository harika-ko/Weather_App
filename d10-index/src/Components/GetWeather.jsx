import { Container, Form, Row, Button, Col, ListGroup } from "react-bootstrap";
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
                <Col>
                    <div className="main-div">
                        <h1 className="heading">Welcome to Weather App</h1>
                        <Form className="text-center">
                            <Form.Label>
                                <p className="heading">Enter the City Name Below</p>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
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
                                    <ListGroup.Item>Current Temperature:{(weather.main.temp - 273.15).toFixed(2)} ºC{" "}</ListGroup.Item>
                                    <ListGroup.Item>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</ListGroup.Item>
                                    <ListGroup.Item>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}</ListGroup.Item>
                                    <ListGroup.Item>Feels like: {(weather.main.feels_like - 273.15).toFixed(2)} ºC{" "}</ListGroup.Item>
                                    <ListGroup.Item>Humidity: {weather.main.humidity} %</ListGroup.Item>
                                    <ListGroup.Item>Maximum Temperature: {(weather.main.temp_max - 273.15).toFixed(2)} ºC{" "}</ListGroup.Item>
                                    <ListGroup.Item>Minimum Temperature: {(weather.main.temp_min - 273.15).toFixed(2)} ºC{" "}</ListGroup.Item>
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