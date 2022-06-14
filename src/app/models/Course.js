const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String },
    videoId: { type: String , maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true }, //unique sẽ không cho phép có 2 slug giống nhau và nó sẽ tự động dùng thư viện sortId nối thêm vào slug
}, {
    timestamps: true,//tạo ra thời gian tạo và thời gian sửa
});

module.exports = mongoose.model('Course', Course);
