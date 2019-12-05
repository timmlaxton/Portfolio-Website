import React, { Component } from 'react';
import { Grid, Row, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  render () {
    return (




      <div className="grid-container">
      <div className="row-container">

      <div className="project-one">
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1074269.jpg) center / cover'}} >Comic Clan</CardTitle>
        <CardText>
          A comic database where users can build profiles and add comments
        </CardText>
        <CardActions border>
          <Button href="https://github.com/timmlaxton/Comic_clan" colored>GitHub</Button>

        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
      </Card>

      </div>

        <div className="project-two">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60) center / cover'}} >Holiday Booking</CardTitle>
          <CardText>
            Holiday booking App that identifies rooms based on selected criteria
          </CardText>
          <CardActions border>
            <Button href="https://github.com/timmlaxton/Property_Rental" colored>GitHub</Button>

          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
          </Card>

          </div>

        <div className="project-three">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.unsplash.com/photo-1523321826514-fcd51dbe0c2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60) center / cover'}} >Exercise App</CardTitle>
          <CardText>
          WIP Exercise App for recording your fitness regime  WIP
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>

          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>

        <div className="project-four">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://i.pinimg.com/originals/4d/12/4f/4d124f822f6f382dcfe47326cd5f3b5d.gif) center / cover'}}>History App</CardTitle>
          <CardText>
           Educational App that allows users to learn about significant historical events
          </CardText>
          <CardActions border>
            <Button href="https://github.com/timmlaxton/History_Education_App" colored>GitHub</Button>
          </CardActions>

          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>



<div className="project-five">
<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
  <CardTitle style={{color: 'black', height: '176px', background: 'url(https://fox17.com/resources/media/fcd7a380-eab6-4467-891e-be2ea75fe52b-large16x9_ChuckNorris.jpg?1560772299245) center / cover'}}>Joke App</CardTitle>
  <CardText>
  Jokebot - Chatbot that tells jokes
  </CardText>
  <CardActions border>
    <Button href="https://github.com/timmlaxton/Jokebot" colored>GitHub</Button>
  </CardActions>

  <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
  </CardMenu>
</Card>


</div>

<div className="project-six">
<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
  <CardTitle style={{color: 'black', height: '176px', background: 'url(http://hostswebsite.com/wp-content/uploads/2019/06/1561393855_maxresdefault.jpg) center / cover'}}>Rock Paper Scissors</CardTitle>
  <CardText>
  Rock Paper Scissors
  </CardText>
  <CardActions border>
    <Button href="https://github.com/timmlaxton/Rock_Paper_Scissor" colored>GitHub</Button>
  </CardActions>

  <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
  </CardMenu>
</Card>


</div>

<div className="project-seven">
<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
  <CardTitle style={{color: 'black', height: '176px', background: 'url(https://i.ytimg.com/vi/U9T6YkEDkMo/maxresdefault.jpg) center / cover'}}>History App</CardTitle>
  <CardText>
  Recipe Finder
  </CardText>
  <CardActions border>
    <Button href="https://github.com/timmlaxton/Recipe_App" colored>GitHub</Button>
  </CardActions>

  <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
  </CardMenu>
</Card>


</div>

<div className="project-eight">
<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
  <CardTitle style={{color: 'black', height: '176px', background: 'url(https://i.ytimg.com/vi/j8Z-EvqZ0EU/maxresdefault.jpg) center / cover'}}>Currency Convertor</CardTitle>
  <CardText>
  Currency Convertor
  </CardText>
  <CardActions border>
    <Button href="https://github.com/timmlaxton/Currency_Convertor" colored>GitHub</Button>
  </CardActions>
  <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
  </CardMenu>
</Card>


</div>


<div className="project-nine">
<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
  <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn.images.express.co.uk/img/dynamic/130/590x/Weatherman-Michael-Fish-interview-Tony-Padman-586853.jpg) center / cover'}}>Weather App</CardTitle>
  <CardText>
  Weather App
  </CardText>
  <CardActions border>
    <Button href="https://github.com/timmlaxton/Weather_App" colored>GitHub</Button>
  </CardActions>
  <CardMenu style={{color: '#fff'}}>
    <IconButton name="share" />
  </CardMenu>
</Card>


</div>



          </div>
          </div>





      )
    }
  }



export default Projects;
