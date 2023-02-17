
import { Articles } from '../model/articles.ts'

// API
const getArticles = async (ctx) => {
  console.log('getArticles')
  try {
    const result = await Articles.all()
    ctx.response.body = {
      success: 'true',
      data: result
    }
  } catch (err) {
    console.log('getArticles api ERROR', err)
    ctx.response.status = 500
    ctx.response.body = {
      success: 'false',
      msg: err.toString()
    }
  }
}

const getArticle = async (ctx) => {
  console.log(await ctx.params.id)
  const result = await Articles.where({ 'id': ctx.params.id }).get()
  console.log(result)
  ctx.response.body = {
    success: 'true',
    data: result
  }
}

const addArticle = async (ctx) => {
  const article = new Articles()
  const result = ctx.request.body(); // content type automatically detected
  console.log(result)
  if (result.type === "json") {
    const value = await result.value; // an object of parsed JSON
    article.id = parseInt(Math.random() * 1000).toString()
    article.name = value.name + parseInt(Math.random() * 1000).toString()
    article.title = value.title + parseInt(Math.random() * 1000).toString()
    article.content = value.content + parseInt(Math.random() * 1000).toString()
    article.save()
    ctx.response.body = {
      success: 'true',
      data: await Articles.where('id', article.id).get()
    }
    console.log(ctx.response.body)
  } else {
    console.warn('request type error')
    ctx.response.body = {
      success: 'false',
    }
  }
}
const updateArticle = async (ctx) => {
  const article = new Articles()
  const result = ctx.request.body(); // content type automatically detected
  if (result.type === "json") {
    const value = await result.value; // an object of parsed JSON
    const oldArticle = Articles.where({ 'id': ctx.params.id }).get()
    const newArticle = {
      name: value.name ? value.name + parseInt(Math.random() * 1000).toString() : oldArticle.name,
      title: value.title ? value.title + parseInt(Math.random() * 1000).toString() : oldArticle.title,
      content: value.content ? value.content + parseInt(Math.random() * 1000).toString() : oldArticle.content,
    }
    await Articles.where({ 'id': ctx.params.id }).update(newArticle)

    ctx.response.body = {
      success: 'true',
      data: await Articles.where({ 'id': ctx.params.id }).get()
    }
    console.log(ctx.response.body)
  } else {
    console.warn('request type error')
    ctx.response.body = {
      success: 'false',
    }
  }
}
const deleteArticle = async (ctx) => {
  try{
    await Articles.deleteById(ctx.params.id);
    ctx.response.body = {
      success: 'true',
    }
  }catch(err){
    console.log('deleteArticle ERROR', err)
    ctx.response.body = {
      success: 'false',
    }
  }
}

export {
  getArticles,
  getArticle,
  addArticle,
  updateArticle,
  deleteArticle
}





