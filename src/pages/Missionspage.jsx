import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import { Card, Col, Row } from 'react-bootstrap';

const Mision = [
  
  {
    title: "Food",
    description:
      "Food is to provide complete and balanced nutrition to every Indian i.e. men, women and children.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },


  {
    title: "",
    description:
      "Housing To provide a decent housing to every family in India.",
    gradient: "linear-gradient(135deg, #778899, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "",
    description:
      "Clothing To ensure that their clothing is provided according to the regions",
    gradient: "linear-gradient(135deg, #, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "Roads Providing roads to every area",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "Economy To establish a better economy than any other country in the world. Seeing that the rupee is worth more than the dollar.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "",
    description:
      "Development Setting up factories, cottage industries, to export to world countries.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "Agriculture Development of agriculture by making land available and providing new support Assembly Constituencies for a large percentage of India's land area to be cultivated.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "Employment Every single employee working in Government, Private and Contract, Outsourcing, Remuneration, Honorary, Private, Management in India should be regular and get pension and live comfortably after retirement.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "Education Establishing modern education more than any other country in the world. Paying salaries on regular basis to all the Schools, High School, Jr. College, Degree College, University teachers, lecturers, teachers, professors and teachers in managements, managements, and taking pension as soon as you retire.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "",
    description:
      "Medical Health Making the necessary arrangements to ensure that a greater percentage of all countries in the world are free from illness. The government should identify those who are available to the people and provide first aid in the villages and provide them with remuneration and ensure that they get a pension and live comfortably when they retire.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "Employment To ensure that every single employee (Employees, Asha, Anganwadi teachers, Ayas) working in Government and Contract, Outsourcing, Work Remuneration, Honorary, Private, Management in India should be regular and get pension and live comfortably after retirement.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "",
    description:
      "WATER MANAGEMENT AND SANITATION India has 18 per cent of the world's population but only 4 per cent of water resources. Climate change and an erratic monsoon have added to the water stress felt by farmers, industries, consumers and others.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "INTERNAL SECURITY In the aftermath of the Mumbai terror attacks in 2008, Congress revamped the internal security system and implemented a number of radical measures. Distressingly, gaps have emerged in the system. Besides, the increase in hate speeches, hate crimes and communal strife has compounded the situation.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "HEALTH KPM Party was the first political party to acknowledge that health of the people and healthcare are the responsibility of the government. KPM Party introduced the first healthcare scheme in India and firmly believes that all citizens have the Right to Health.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "RELIGIOUS AND LINGUISTIC MINORITIES The plurality of religions represents the history of India. History cannot be altered. All people living in India and all children born in India are equally entitled to enjoy human rights that includes the right to practice one's religion. Pluralism and diversity constitute the ethos of India and are enshrined in the Preamble to the Constitution of India. Given the history and the democratic traditions of India, the KPM Party believes that there is no place for authoritarianism or majoritarianism. Linguistic and religious minorities are granted human and civil rights under the Constitution of India. KPM Party pledges to uphold and protect these rights.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "INFRASTRUCTURE The hardware of an economy are roads, railways, ports, airports and electricity. Capital expenditure and modern technology have to be mobilized to create infrastructure of world class quality. A variety of models of building infrastructure must be adopted according to the needs of the economy.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 


  {
    title: "",
    description:
      "MEDIA In the last ten years, significant sections of the media have been robbed of, or surrendered, their freedom KPM Party will help the media re-discover the freedom that they enjoy under the Constitution.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "",
    description:
      "NORTH EASTERN STATES The North Eastern states within the Union of India represent the pluralism and diversity of India. We are proud that we are a diverse country that is home to many races, religions and languages.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "RURAL AND URBAN DEVELOPMENT",
    description:
      "TAXATION AND TAX REFORMS Taxation forms the core of governance. The last ten years of the BJP/ NDA government is a case of taxation gone berserk. The share of taxes paid by the common person and the poor through regressive indirect taxes has increased significantly and the share of taxes paid by corporate has decreased-the exact opposite of what a people-friendly and progressive taxation policy should be. Despite the tall claims of increasing the tax base through demonetization and GST, India's overall tax to GDP has not increased in the last decade, leaving very little room for increased expenditure. Congress will undertake a complete overhaul of India's taxation system to make it people-friendly and efficient, and to incentivize private savings and investment.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "",
    description:
      "WOMEN'S EMPOWERMENT Historically, women have been discriminated against and put at great disadvantage. Congress pledges to remove the discrimination against women and uphold and advance the rights of women.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "SPORTS ",
    description:
      "RURAL AND URBAN DEVELOPMENT The two realities that India faces are (1) that nearly 60 per cent of the people live in rural areas and (2) urbanization is taking place rapidly. Hence, we have to pay equal attention to rural development and urban development, and provide adequate infrastructure in our villages and towns/ cities. INDUSTRY THRE In order to become a developed economy and create good quality jobs for hundreds of thousands of youth, it is critical that India transitions from a consumer economy to a producer economy. India must become a manufacturing powerhouse that produces goods and services for itself and the world. To this end, beyond economic and business factors, the most vital ingredient is social harmony that will attract investments and a skilled labour force. It is thus no surprise that in the last 25 years, India's manufacturing share of GDP has been higher during the Congress rule. On the contrary, in the last 10 years (2014-24), the share of manufacturing has stagnated at 14 per cent.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "ART, CULTURE AND HERITAGE",
    description:
      "SPORTS No government in India's independent history has politicized sports as much as the present BJP/ NDA government. From scheduling World Cup games in select venues for overt political to turning a blind eye to harassment purposes of India's Olympians by politically-aligned persons in sports bodies, Indian sports is arguably going through its worst phase. Congress believes that Indian sport will soar only when the autonomy of sports bodies is restored, political bias is removed, and the government is a strong and neutral supporting force for sports development.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "UNEMPLOYMENT MEETING THE CRY FOR JOBS",
    description:
      "ART, CULTURE AND HERITAGE Art, culture and heritage constitute the identity of a people. The BJP/ NDA government has focused on looking at culture through the lens of politics and ideology, while the actual practitioners, practices and institutions of culture have been neglected or actively undermined. Congress is committed to protect the rich diversity of India's art and culture and to ensure they thrive in an atmo - sphere of freedom and creativity.",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

  {
    title: "EDUCATION:",
    description:
      "UNEMPLOYMENT MEETING THE CRY FOR JOBS The most challenging issue today is widespread unemployment. The cry everywhere is for jobs. The unemployment rate ranges from 10 per cent (for age 15-29) to 42.3 per cent (for graduates under age 25) to 9.8 per cent (for graduates of age 30-34). No one has any faith in the BJP which deceived the people with the false claim that it will create 2 crore jobs a year. The government's response to the grave problem was to abandon labour force surveys, distort data and pretend that the problem does not exist. We acknowledge the problem and we promise to create millions of jobs through concrete initiatives:",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan
  },
 

 
 
];

function Missions() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleLearnMoreClick = (role) => {
    setSelectedRole(role);
  };

  const handleBackClick = () => {
    setSelectedRole(null);
  };

  return (
    <>

<Row xs={1} sm={2} md={3} className="g-4">
      {Mision.map((item, index) => (
        <Col key={index}>
          <Card style={{ background: item.gradient, border: 'none' }}>
            <Card.Body>
              {item.title && <Card.Title>{item.title}</Card.Title>}
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
     
    </>
  );
}

export default Missions;
