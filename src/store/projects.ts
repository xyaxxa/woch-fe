import { reactive } from "vue";
import type { Project } from "../public/interface";

const projects:Array<Project> = reactive([
  {
    name: 'woch-fe',
    description: 'a personal website-- fe',
    url: 'https://github.com/xyaxxa/woch-fe',
    tags: ['vue'],
  },
  {
    name: 'woch-be',
    description: 'a personal website-- be',
    url: 'https://github.com/xyaxxa/woch-be',
    tags: ['node'],
  },
]);

export default projects;