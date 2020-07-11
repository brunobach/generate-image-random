const fs = require('fs')
const { createCanvas } = require('canvas')
const path = require('path')

const width = 760
const height = 320

const canvas = createCanvas(width, height)
const ctx = canvas.getContext('2d')


module.exports = {
	create(qtd, gitInfo, followersInfo, date) {

	
		const { followers } = gitInfo.data
		const nameFollow = followersInfo.data
		const lastFollow = followersInfo.data.length - 1

		ctx.fillStyle = '#222222'
		ctx.fillRect(0, 0, width, height)
		
		ctx.fillStyle = '#21bfb6'
		ctx.font = '30px Helvetica'	
		ctx.fillText('module.exports', 250, 80.)
		
		ctx.fillStyle = '#ff0000'
		ctx.fillText('= {', 485, 80)

		ctx.fillStyle = '#00ff00'
		ctx.fillText('info', 260, 120)

		ctx.fillStyle = '#6800aa'
		ctx.fillText('( ) {', 315, 120)

		ctx.fillStyle = '#ffffff'
		ctx.fillText('users_count:', 370, 160)

		ctx.fillStyle = '#6f00ff'
		ctx.fillText(qtd, 570, 160)

		ctx.fillStyle = '#ffffff'
		ctx.fillText(',', 620, 160)

		ctx.fillStyle = '#ffffff'
		ctx.fillText('user_followers:', 370, 190)

		ctx.fillStyle = '#6f00ff'
		ctx.fillText(followers, 590, 190)

		ctx.fillStyle = '#ffffff'
		ctx.fillText(',', 610, 190)

		ctx.fillStyle = '#ffffff'
		ctx.fillText('last_follower:', 370, 220)

		ctx.fillStyle = '#ffff00'
		
		ctx.fillText('"', 560, 220)
		ctx.fillStyle = '#ffff00'
		
		const calcNameWidht = (nameFollow[lastFollow].login.length * 18) + 560
		ctx.fillText(nameFollow[lastFollow].login, 575, 220)
		ctx.fillStyle = '#ffff00'
		ctx.fillText('"', calcNameWidht, 220)

		ctx.fillStyle = '#ffffff'
		ctx.fillText(',', calcNameWidht + 10, 220)

		ctx.fillStyle = '#ffffff'
		ctx.fillText('date:', 370, 250)

		ctx.fillStyle = '#ffff00'
		ctx.fillText('"', 450, 250)
		ctx.fillStyle = '#ffff00'
		ctx.font = '25px Helvetica'	
		ctx.fillText(date, 460, 250)
		ctx.font = '30px Helvetica'	
		ctx.fillStyle = '#ffff00'
		ctx.fillText('"', 730, 250)
		
		ctx.fillStyle = '#6800aa'
		ctx.fillText('}', 370, 280)
		
		ctx.fillStyle = '#ff0000'
		ctx.fillText('}', 260, 295)

		ctx.font = '15px Tahoma'	
		ctx.fillStyle = '#ffffff'
		ctx.fillText('linkedin bruno-bach', 35, 260)
		ctx.fillText('hotmail brunobach_sl', 35, 280)

		ctx.fillStyle='#00ff00'
		ctx.save()
		ctx.translate(285, 30) // x, y
		ctx.scale(1, 1)
		ctx.beginPath()
		ctx.arc(0, 0, 10, 0, 6.283185307179586, false)
		ctx.fill()
		ctx.closePath()

		ctx.restore()

		ctx.fillStyle='#ffff00'
		ctx.save()
		ctx.translate(260, 30) // x, y
		ctx.scale(1, 1)
		ctx.beginPath()
		ctx.arc(0, 0, 10, 0, 6.283185307179586, false)
		ctx.fill()
		ctx.closePath()

		ctx.restore()

		
		ctx.fillStyle='#ff0000'
		ctx.save()
		ctx.translate(235, 30) // x, y
		ctx.scale(1, 1)
		ctx.beginPath()
		ctx.arc(0, 0, 10, 0, 6.283185307179586, false)
		ctx.fill()
		ctx.closePath()

		ctx.restore()

		ctx.fillStyle='#111111'
		roundedRect(ctx,10,10,180,180,15)
		ctx.fill()
		ctx.fillStyle = '#222222'

		roundedRect(ctx,19,19,178,178,9)
		ctx.fill()
		roundedRect(ctx,53,53,49,33,10)
		roundedRect(ctx,53,119,49,16,6)
		ctx.fillStyle='#ff0000'
		roundedRect(ctx,135,53,49,33,10)
		roundedRect(ctx,135,119,25,49,10)

		ctx.beginPath()
		ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false)
		ctx.lineTo(31,37)
		ctx.fill()

		for(var i=0;i<8;i++){
			ctx.fillRect(51+i*16,35,4,4)
		}

		for(i=0;i<6;i++){
			ctx.fillRect(115,51+i*16,4,4)
		}

		for(i=0;i<8;i++){
			ctx.fillRect(51+i*16,99,4,4)
		}

		ctx.beginPath()
		ctx.moveTo(83,116)
		ctx.lineTo(83,102)
		ctx.bezierCurveTo(83,94,89,88,97,88)
		ctx.bezierCurveTo(105,88,111,94,111,102)
		ctx.lineTo(111,116)
		ctx.lineTo(106.333,111.333)
		ctx.lineTo(101.666,116)
		ctx.lineTo(97,111.333)
		ctx.lineTo(92.333,116)
		ctx.lineTo(87.666,111.333)
		ctx.lineTo(83,116)
		ctx.fill()

		ctx.fillStyle = 'white'
		ctx.beginPath()
		ctx.moveTo(91,96)
		ctx.bezierCurveTo(88,96,87,99,87,101)
		ctx.bezierCurveTo(87,103,88,106,91,106)
		ctx.bezierCurveTo(94,106,95,103,95,101)
		ctx.bezierCurveTo(95,99,94,96,91,96)
		ctx.moveTo(103,96)
		ctx.bezierCurveTo(100,96,99,99,99,101)
		ctx.bezierCurveTo(99,103,100,106,103,106)
		ctx.bezierCurveTo(106,106,107,103,107,101)
		ctx.bezierCurveTo(107,99,106,96,103,96)
		ctx.fill()

		ctx.fillStyle = 'black'
		ctx.beginPath()
		ctx.arc(101,102,2,0,Math.PI*2,true)
		ctx.fill()

		ctx.beginPath()
		ctx.arc(89,102,2,0,Math.PI*2,true)
		ctx.fill()

		//Desenhando Retangulo principal

		roundedRect(ctx,210,10,540,300,15) // x, y, w, h

		const buffer = canvas.toBuffer('image/png')
		fs.writeFileSync(path.join(__dirname, '..', 'images','canvas.png'), buffer)
	}
}

function roundedRect(ctx,x,y,width,height,radius){
	ctx.beginPath()
	ctx.moveTo(x,y+radius)
	ctx.lineTo(x,y+height-radius)
	ctx.quadraticCurveTo(x,y+height,x+radius,y+height)
	ctx.lineTo(x+width-radius,y+height)
	ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius)
	ctx.lineTo(x+width,y+radius)
	ctx.quadraticCurveTo(x+width,y,x+width-radius,y)
	ctx.lineTo(x+radius,y)
	ctx.quadraticCurveTo(x,y,x,y+radius)
	ctx.stroke()
}