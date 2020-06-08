import { TechnologyType } from "src/app/shared/technology-type.enum"

export class Question{
    constructor(
        public technologyType: TechnologyType,
        public questionText: string,
        public estimatedTime: number
    ){}
}