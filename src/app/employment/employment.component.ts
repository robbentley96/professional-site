import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-employment',
  imports: [
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatTooltipModule
  ],
  templateUrl: './employment.component.html',
  styleUrl: './employment.component.scss'
})
export class EmploymentComponent {
  employments: Employment[] = [
    {
      id: 0,
      employer: 'HighFive (Subsidiary of Horwich Farrelly)',
      title: 'Senior Software Developer and Scrum Master',
      skills: ['C#','Angular', 'Typescript', 'Azure', 'Azure Functions', 'Azure Document Intelligence', 'SQL Server', 'Entity Framework', 'nUnit', 'langchain', 'langgraph', 'Azure Search', 'Azure OpenAI'],
      text: 'In my time at HighFive, I have been working on an AI/LLM project which enables users to upload documents, analyse them and perform various legal processes. This has required the creation of agentic graphs in langgraph to simplify complex processes by splitting them into manageable chunks. The backend is a mixture of typescript for the agentic work and C# for everything else. I have gained experience here in leading/assisting other developers whilst communicating with and delivering to stakeholders. ',
      timePeriod: 'May 2024 - Present',
      imageName: 'highfive.png'
    },
    {
      id: 1,
      employer: 'Horwich Farrelly',
      title: 'Software Developer',
      skills: ['C#','Angular', 'Typescript', 'Azure', 'Azure Functions', 'Azure Document Intelligence', 'SQL Server', 'Entity Framework', 'nUnit', 'Power Automate'],
      text: 'I worked as a developer in a scrum team for HF. I was developing .NET/C# APIs deployed on Azure with a microservice architecture, querying/updating databases via SQL & Entity Framework, using Azure Cognitive Services (primarily Document Intelligence), creating user interfaces with Angular and creating Power Automate flows. I got the chance to work with LLMs and AI which led to my current role.',
      timePeriod: 'March 2021 - May 2024',
      imageName: 'hf.jpeg'
    },
    {
      id: 2,
      employer: 'Sparta Global',
      title: 'Software Developer Trainee',
      skills: ['C#', 'HTML', 'CSS', 'javascript', 'ASP.NET', 'Selenium', 'SQL Server', 'nUnit', 'RestSharp'],
      text: 'Whilst in the Sparta Global academy, I undertook an intense course which covered the basics of C#, OOP principles, unit testing, APIs (RestSharp) and web development (ASP.NET). This experience gave me the skills I needed to thrive in a professional tech environment.',
      timePeriod: 'September 2020 - March 2021',
      imageName: 'sparta.png'
    },
    {
      id: 3,
      employer: 'Peritus International',
      title: 'Subsea Engineer',
      skills: ['VBA Macros', 'Python', 'ABAQUS'],
      text: 'At Peritus, I simulated subsea pipelines to verify their suitability for projects. These simulations required knowledge of Abaqus and Python. I also set up many VBA Macro spreadsheets for analysing large amounts of engineering data.',
      timePeriod: 'November 2018 - September 2020',
      imageName: 'peritus.jpeg'
    }
  ];
}

interface Employment {
  id: number,
  employer: string,
  title: string,
  skills: string[],
  text: string,
  timePeriod: string,
  imageName: string
}
