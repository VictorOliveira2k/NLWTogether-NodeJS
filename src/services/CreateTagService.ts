import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

class CreateTagService{
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    // Verifica se o nome está preenchido
    if(!name){
      throw new Error("Incorrect name!")
    }

    // verifica se a tag já existe
    // findOne() --> SELECT * FROM TAGS WHERE NAME = "name"
    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    })

    // se a tag já existe, não salva a tag
    if(tagAlreadyExists){
      throw new Error("Tag already exists")
    }

    // se a tag não existe, salva a informação
    const tag = tagsRepositories.create({
      name
    })

    await tagsRepositories.save(tag)

    return tag
  }
}

export { CreateTagService }