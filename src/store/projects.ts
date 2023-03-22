import { reactive } from "vue";
import type { Project } from "../public/interface";

const projectsStore = reactive({
  data: [] as Project[],
  update(newData:Project[]) {
    this.data = newData;
  }
})
export default projectsStore;