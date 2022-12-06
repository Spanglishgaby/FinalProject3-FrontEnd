import React, {useState} from 'react';
import {
    Button,
    Container,
    Header,
    Form,
    Segment,
    Grid
  
  } from 'semantic-ui-react'
  
function HeaderPage (){

  return (
        <Container className= "header" 
        style={{ marginBottom:'50px',}} 
        textAlign='center'>
            <div id = "headerContiner">
              <h1 id="headerTop">NEW YORK</h1>
            </div>
            <Header
                as='h2'
                content='BOBA TEA FACTORY'
                inverted
                style={{
                  fontSize:  '1.7em',
                  fontWeight: 'normal',
                  marginTop: '1.5em',
                }}
            />
            <Grid textAlign='center'  verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 650 }}>
              
            </Grid.Column>
            
          </Grid>
        </Container>

    )

}
export default HeaderPage;