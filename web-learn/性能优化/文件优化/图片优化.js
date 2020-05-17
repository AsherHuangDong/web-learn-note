

/**
 * 计算图片大小:
 *    对于一张 100 _ 100 像素的图片来说，图像上有 10000 个像素点，如果每个像素的值是 RGBA 存储的话，
 *    那么也就是说每个像素有 4 个通道，每个通道 1 个字节（8 位 = 1 个字节），
 *    所以该图片大小大概为 39KB（10000 _ 1 * 4 / 1024）。
 * 
 * 使用背景: 在实际项目中，一张图片可能并不需要使用那么多颜色去显示，我们可以通过减少每个像素的调色板来相应缩小图片的大小。
 * 
 * 优化思路:
 *   1.减少像素点
 *   2.减少每个像素点能够显示的颜色
 */
