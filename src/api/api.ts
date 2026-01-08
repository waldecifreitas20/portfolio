import type { Project } from '@/types/Project';
import { type Technology } from '@/types/Technology';
import ProjectsJson from '@/data/projects.json';
import TechsJson from '@/data/technologies.json';

type ApiResponse<T> = (data: Array<T>) => void;


function api<T>(json: any) {
  return JSON.parse(JSON.stringify(json)) as { [key: string]: Array<T>; };
}

async function fetchTechnologies(callback: ApiResponse<Technology>) {
  const { technologies } = api<Technology>(TechsJson);
  callback(technologies);
}

async function fetchProjects(callback: ApiResponse<Project>) {
  const { projects } = api<Project>(ProjectsJson); 
  callback(projects);
}


export const Api = {
  fetchTechnologies,
  fetchProjects,
}