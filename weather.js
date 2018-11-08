class Weather{
  constructor(city, state){
    this.apiKey = 'c87f1352f24c7a178567e58f75dfc701';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API 
  async getWeather(){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;

  }

  // Change weather location 
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}