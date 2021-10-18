import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {

    const bestsellers = props.bestsellers.map(bestseller => {
        return (
           <Media tag="li" key={bestseller.id}>
              <RenderPartner bestseller={bestseller}/>
            </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>We are family run and owned coffee and bake shop that originated in the city of Detroit. The founder's love for coffee and specialty in making the best breakfast coffee for friends and family during the holiday led to the inspiration of this best-in-town shop!</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2021</dd>
                                <dt className="col-6">No. of Location in 2021</dt>
                                <dd className="col-6">5</dd>
                                <dt className="col-6">No. of Reviews in 2021</dt>
                                <dd className="col-6">43</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">22</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">To me, breakfast is the most important meal.</p>
                                <footer className="blockquote-footer">Unknown.{' '}
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Best Seller</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {bestsellers}
                    </Media>
                </div>
            </div>
        </div>
    );
}

 function RenderPartner({bestseller}) {
     if (bestseller) {
         return(<React.Fragment>
            <Media object src={bestseller.image} alt={bestseller.name} width="150"/>
            <Media body ClassName="m1-5 mb-4">
                <Media heading>{bestseller.name}</Media>
                <p>{bestseller.description}</p>
             </Media>
           </React.Fragment>
       )

        }  else {
           return <div/>  
        }
    }


export default About;