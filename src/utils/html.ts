const Entities = require('html-entities').AllHtmlEntities;

export class HTML {
  entity: any
  constructor () {
    this.entity = new Entities();
  }

  decode (html: string): string {
    return this.entity.decode(html)
  }

  encode (html: string): string {
    return this.entity.encode(html)
  }
}