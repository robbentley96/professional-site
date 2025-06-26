import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-projects',
  imports: [
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  professionalProjects: ProfessionalProject[] = [
    {
      id: 0,
      name: 'Legal Intelligence LLM Agent',
      text: 'I have been working on an LLM multi-agent project for assisting case handlers with their legal cases. I have built a user interface which interacts with two APIs: First, a C# API for document upload and interacting with Azure AI Search. Second, a Typescript API for interacting with the agents. I built my own custom indexing function which has halved the time our documents were taking to process by leveraging asynchronous processes and eliminating unnecessary steps. This indexer uses Azure Document Intelligence to extract text when OCR is required. I also built the multi-agent graph which enters with a supervisor agent who passes tasks to the other custom agents. These agents have been given various tools such as reading from the Azure Search index and performing claim valuation calculations provided by the business. Outside the box thinking has been essential for this project due to its complexity and modernity.',
      technology: ['C#','Angular', 'Typescript', 'Azure', 'Azure Functions', 'Azure Document Intelligence', 'SQL Server', 'Entity Framework', 'nUnit', 'langchain', 'langgraph', 'Azure Search', 'Azure OpenAI']
    },
    {
      id: 1,
      name: 'Litigation Assessment Tool',
      text: 'I worked on a litigation assessment tool with an Angular UI and C# Azure Function backend. My main contribution to this was to build up new models in Document Intelligence which could then strip information from PDFs with a predefined format. This data was fed into the business logic which made a decision on whether to litigate a claim or not. I implemented several strategies into this business logic to meet criteria provided by stakeholders. This logic was written into our C# Azure Functions based on conditions stored in our SQL Server database. Data was sent to the DB/retrieved via Entity Framework.',
      technology: ['Angular', 'C#', 'Azure Functions', 'Document Intelligence', 'SQL Server', 'Entity Framework']
    },
    {
      id: 2,
      name: 'Automated Hire Rate Process',
      text: 'This project required me to set up an automated process every time a case runs through our case management system. I set up an Azure Function which sends a few pieces of data to a third party API. A report is received back to an email inbox which is monitored by an Azure Logic App. The report is stripped from the email and uploaded to an Azure Storage blob container. A blob trigger Azure Function I built then picks up the file and uploads to the associated case in the case management system.',
      technology: ['C#', 'Azure Logic App', 'Azure Functions']
    },
    {
      id: 3,
      name: 'Video viewing platform',
      text: 'I worked on a video platform similar to Netflix but for legal information. Videos were retrieved from vimeo and served to the user in different categories. My contribution to this was threefold. Firstly tightening the security of the application by integrating with Azure API Management. Secondly, ensuring the application could access unlisted videos so that the application could no longer be circumvented by going straight to vimeo. Thirdly, improving the use of the vimeo API to ensure we were no longer retrieving excessive data which seriously affected performance.',
      technology: ['Angular', 'vimeo API', 'Azure']
    }
  ];

  personalProjects: PersonalProject[] = [
    {
      id: 0,
      name: 'Habit Tracker',
      text: 'This is a habit tracker for recording the days on which you completed a habit. It is an Angular UI and C# Azure Functions connected to a SQL Server database on the backend via Entity Framework. Simply select/create a habit in the nav bar at the top and select/deselect completions in the grid accordingly.',
      technology: ['Angular', 'C#', 'Azure Functions', 'SQL Server', 'Entity Framework'],
      githubLink: 'https://github.com/robbentley96/HabitTracker',
      imageName: 'HabitTracker.png'
    },
    {
      id: 1,
      name: 'Family Tree Tool',
      text: 'This is a tool for mapping the relations between family members. It is an Angular UI and C# Azure Functions connected to a Google Sheets document on the backend. People can be added and given parent-child and spousal relationships. This allows for the displaying of siblings, parents, children and marriages.',
      technology: ['Angular', 'C#', 'Azure Functions', 'Sheets API'],
      githubLink: 'https://github.com/robbentley96/FamilyTree',
      imageName: 'FamilyTree.png'
    },
    {
      id: 2,
      name: 'YouTube Video Search/View',
      text: 'This is an Angular web app for making searches on YouTube via the YouTube API. There are set search terms which can be included in search requests and the top results are shown. These videos are then viewable in the app. This app was created as an alternative to the YouTube website as it serves many suggested videos to the user which is not always wanted.',
      technology: ['Angular', 'YouTube API'],
      githubLink: 'https://github.com/robbentley96/YouTubeViewer',
      imageName: 'YouTubeViewer.png'
    }
  ]
}

interface ProfessionalProject {
  id: number,
  name: string,
  text: string,
  technology: string[]
}

interface PersonalProject {
  id: number,
  name: string,
  imageName: string,
  text: string,
  githubLink: string,
  technology: string[]
}
