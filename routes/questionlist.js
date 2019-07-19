var have_ask=new Array(65);
var totalask=0;

module.exports = function(io) {
	var luckynumber ;
	luckynumber = Math.floor(Math.random() * 4);

	var questions = [
		{
			"id": 0,
			"multi" : false,
			"subject" : "Python",
			"description" : "請問{'csie':[1,2,3],2: 4}是python中哪一種變數型態 (單選)",
			"options" : [
				"string(字串)",
				"list(序列)",
				"dict(字典)",
			],
			"correct" : [ 2 ]
		},

		{
			"id": 1,
			"multi" : false,
			"subject" : "Secure",
			"description" : "CIA 是下列何者的簡寫(單選)",
			"options" : [
				"Central Intelligence Agency",
				"Computer Informational Automation",
				"Confidentiality Integrity Availability",
				"Chief In Africa",
			],
			"correct" : [ 2 ]
		},

		{
			//"money": 3000,
			"id": 2,
			"multi" : false,
			"subject" : "Secure",
			"description" : "資訊安全搶旗賽的縮寫為以下何者(單選)",
			"options" : [
				"CSF",
				"CTF",
				"CSS",
				"CYY",
			],
			"correct" : [ 1 ]
		},

		{
			//"money": 5000,
			"id": 3,
			"multi" : false,
			"subject" : "Secure",
			"description" : "「替換式密碼」是將明文字母，用替換的方式進行加密，例如將英文的字母對應到注音符號。若我們只知道被加密後的注音符號，則最容易採用何種方式破解？ (單選)",
			"options" : [
				"頻率分析：分析每個字出現的頻率",
				"暴力窮舉法：直接暴力窮舉所有可能性",
				"機器學習：透過非監督式的機器學習，以及強化學習加上回饋函數，讓電腦自動計算",
				"以上皆無法破解",
			],
			"correct" : [ 0 ]
		},

		{
			//"money": 3000,
			"id": 4,
			"multi" : false,
			"subject" : "Secure",
			"description" : "資訊營結業時要頒發獎狀給小明，而小明必須輸入他的名字，該獎狀樣板如下：</br>『恭喜資訊營小隊員 (小明輸入的名字) 獲得精神總錦標』</br>但小明不懷好意，想要惡整同學小華，於是他輸入了「小華告白失敗，怒而自宮，精神可佳，因此」，所以這個獎狀就變成這樣：『恭喜資訊營小隊員 小華告白失敗，怒而自宮，精神可佳，因此獲得精神總錦標』</br>請問小明的行為，與網站哪種常見攻擊有異曲同工之妙？ (單選)",
			"options" : [
				"XSS 跨網站指令碼攻擊",
				"CSRF 跨站請求偽造攻擊",
				"SQL Injection 資料庫隱碼/注入攻擊",
				"Broken Authentication 身分驗證功能缺失",
			],
			"correct" : [ 2 ]
		},

		{
			//"money": 3000,
			"id": 5,
			"multi" : false,
			"subject" : "放鬆一下",
			"description" : "考驗運氣的時候XD (單選)",
			"options" : [
				"老師說過，選項三短一長當然是要選最長的",
				"擲個橡皮擦決定吧",
				"運氣也是實力的一種呢",
				"都說是運氣了,答案當然和選項無關",
			],
			"correct" : [ luckynumber ]
		},

		{
			//"money": 3000,
			"id": 6,
			"multi" : false,
			"subject" : "小知識",
			"description" : "資工系在台大是屬於那一院呢?(單選)",
			"options" : [
				"理學院",
				"工學院",
				"商學院",
				"以上皆非",
			],
			"correct" : [ 3 ]
		},

		{
			//"money": 5000,
			"id": 7,
			"multi" : false,
			"subject" : "小知識",
			"description" : "麥香10元奶茶跟紅茶包裝上，除了顏色還有什麼差別? (單選)",
			"options" : [
				"奶茶上面的是大麥",
				"紅茶上有大吉嶺茶葉",
				"奶茶上有一隻乳牛",
			],
			"correct" : [ 2 ]
		},

		{
			//"money": 5000,
			"id": 8,
			"multi" : false,
			"subject" : "資安",
			"description" : "下列何者非常用的加密方式？(單選)",
			"options" : [
				"RSA",
				"AES",
				"Hash",
				"AIHA",
			],
			"correct" : [ 3 ]
		},

		{
			//"money": 5000,
			"id": 9,
			"multi" : true,
			"subject" : "網路安全",
			"description" : "關於網頁 cookie 的敘述，下列哪些正確？(多選)",
			"options" : [
				"要搭配 cake",
				"常用來檢驗用戶身份",
				"有時候會附贈 coffee",
				"會被存在瀏覽器上",
				"3C 是指 cookie, cake, coffee",
			],
			"correct" : [ 1, 3 ]
		},

		{
			//"money": 2000,
			"id": 10,
			"multi" : false,
			"subject" : "Python",
			"description" : "下列哪些是 Python 可以辦到的事情？ (單選)",
			"options" : [
				"動態網頁爬蟲",
				"機器學習",
				"架設動態網站",
				"自然語言處理",
				"以上皆是",
			],
			"correct" : [ 4 ]
		},

		{
			//"money": 5000,
			"id": 11,
			"multi" : false,
			"subject" : "Python",
			"description" : "下列哪一個 Python 語法是錯誤的？(A,B 型態皆為 Int) (單選)",
			"options" : [
				"if A = B:",
				"for A in range(2018):",
				"A,B = (1,2)",
			],
			"correct" : [ 0 ]
		},

		{
			//"money": 3000,
			"id": 12,
			"multi" : false,
			"subject" : "Python",
			"description" : "下列何者並非 Python 的注解符號？ (單選)",
			"options" : [
				"\"\"\"\"\"\"",
				"#",
				"//",
				"''''''",
			],
			"correct" : [ 2 ]
		},

		{
			//"money": 5000,
			"id": 13,
			"multi" : false,
			"subject" : "Python",
			"description" : "請問以下式子會印出什麼結果?(單選)\n	a=range(3,9,3)\n	b=list(a)\n	print(b)",
			"options" : [
				"[1,3,5]",
				"[3,9,3]",
				"[3,6,9]",
				"[9,6,3]",
			],
			"correct" : [ 2 ]
		},

		{
			//"money": 3000,
			"id": 14,
			"multi" : false,
			"subject" : "Machine Learning",
			"description" : "下列哪個問題最<strong>不適合</strong>使用機器學習的方法解決？ (單選)",
			"options" : [
				"判斷一封電子郵件是不是垃圾信件",
				"利用氣象台的觀測資料預測未來七天的天氣",
				"利用數字的各種表示法(ex: 二進位、八進位)判斷輸入的數字是不是偶數",
				"判斷照片中的人臉的年紀與性別",
			],
			"correct" : [ 2 ]
		},

		{
			//"money": 3000,
			"id": 15,
			"multi" : false,
			"subject" : "Machine Learning",
			"description" : "下列哪些方法有助於解決過適化(Overfitting)的問題？ (單選)",
			"options" : [
				"找到更多的訓練用的資料",
				"「這一定是不夠深」，所以加強模型的能力(capability)",
				"買包綠色乖乖放在電腦旁，祈禱下一次會乖乖地跑出我們想要的結果",
				"在電腦的兩側放上蠟燭，讓電腦相信你是虔誠的資料科學家",
				"接受「你的模型跟你的人生一樣一無是處」的事實",
			],
			"correct" : [ 0 ]
		},

		{
			//"money": 8000,
			"id": 16,
			"multi" : false,
			"subject" : "Machine Learning",
			"description" : "以下關於機器學習的描述，何者正確？ (單選)",
			"options" : [
				"機器學習的模型在手上的資料做得很好，就表示這是一個很好的模型",
				"挑選假說集合(hypothesis set)時，應該盡量挑選能力較弱的假說集合以避免overfitting",
				"對於同一個問題，不同的損失函數(loss function)不會影響最好解出來的模型為何",
				"利用模擬退火法做最佳化(optimization)時，可能會停在區間極小值而無法得到全域最小值",
			],
			"correct" : [ 3 ]
		},

		{
			//"money": 8000,
			"id": 17,
			"multi" : true,
			"subject" : "Machine Learning",
			"description" : "以下哪些問題適合用機器學習解決？ (多選)",
			"options" : [
				"利用一個人的頭髮長度與瞳孔顏色，預測他的國文成績",
				"利用使用者過往點擊廣告的情形，預測使用者喜歡的廣告類型",
				"利用一個人的身高與BMI值，預測他的體重",
				"利用一個人的體脂肪、出生年月日、身高、體重，預測他的年齡",
				"利用電子郵件中的文字，判斷這封信是不是垃圾郵件",
			],
			"correct" : [ 1, 4 ]
		},

		{
			//"money": 5000,
			"id": 18,
			"multi" : false,
			"subject" : "Machine Learning",
			"description" : "下列哪些應用不是用機器學習的方式實現的？ (單選)",
			"options" : [
				"當你打出特定的字詞時，會回答特定句子的對話機器人",
				"iPhone的Siri將語音資料轉換成文字的過程",
				"網路上流行一陣子的quick, draw!，讓機器人猜你現在畫的東西是什麼",
				"自動駕駛車當中，試著判斷路上的物件的應用",
				"贏過世界棋王的AlphaGO",
			],
			"correct" : [ 0 ]
		},
		{
			//"money": 5000,
			"id": 19,
			"multi": false,
			"subject": "Python",
			"description": "下列哪一行程式會出現Error？（單選）",
			"options": [
				"c = []",
				"s = <>",
				"i = ()",
				"e = {}",
			],
			"correct": [1]
		},
		{
			//"money": 5000,
			"id": 20,
			"multi": false,
			"subject": "Python",
			"description" : "根據python的語法，下列c、s、i、e哪一個的值跟其他三個不一樣？ (單選)",
			"options": [
				"c = 2 + 2",
				"s = 2 ** 2",
				"i = 2 ^ 2",
				"e = 8 // 2",
			],
			"correct": [2]

		},
		{
			//"money": 3000,
			"id": 21,
			"multi": false,
			"subject": "Python",
			"description" : "[2, 0, 1, 9][-2]會回傳什麼值？ (單選）（ 提示:index )",
			"options": [
				"2",
				"0",
				"1",
				"9",
				"8",
			],
			"correct": [2]

		},
		{
			//"money": 5000,
			"id": 22,
			"multi": false,
			"subject": "Python",
			"description" : "哪一種方式比較適合修改list裡面的值？ (單選)",
			"options": [
				"用索引值直接修改",
				"建一個新的list蓋過去",
				"把電腦重新開機",
				"放下它，接受它，放棄它",
				"rm -rf /",
			],
			"correct": [0] 
		},
		{
			
			//"money": 3000,
			"id": 23,
			"multi": false,
			"subject": "Python",
			"description" : "要如何從s = \"2019臺大資訊營-就想這young資\"中取出\"就想這young資\"？ (單選)",
			"options": [
				"s[\"你的程式\"]",
				"s[-9]",
				"s[10 ~ 19]",
				"s[10 : 19]",
				"s[10 - 19]",
			],
			"correct": [3]

		},
		{
			//"money": 2019,
			"id": 24,
			"multi": false,
			"subject": "送分題",
			"description" : "這次資訊營的標題是什麼？ (單選)",
			"options": [
				"2019臺大資訊營-就是這young資",
				"2019臺大資訊營-就想這young資",
				"2019臺大資訊營-就愛這young資",
				"2019臺大資訊營-就要這young資",
			],
			"correct": [2]
		},
		{
			//"money": 2000,
			"id": 25,
			"multi": false,
			"subject": "時事",
			"description" : "下列何者在開山里的範圍內? (單選)",
			"options": [
				"台北市",
				"台中市",
				"花蓮縣",
				"以上皆是",
			],
			"correct": [3]	

		}, 
		{
			//"money": 5000,
			"id": 26,
			"multi": false,
			"subject": "金頭腦題",
			"description" : "今天有黑白兩杯，黑杯裝了100毫升咖啡，白杯裝了100毫升牛奶。我把黑杯中的10毫升咖啡倒進白杯拌勻，接著再把白杯的內容物倒10毫升到黑杯中。</br>請問這時候，是黑杯中的牛奶濃度較多，還是白杯中的咖啡濃度較多呢？ (單選)",
			"options": [
				"黑杯中的牛奶比較多",
				"白杯中的咖啡比較多",
				"一樣多!!",
				"不知道QQ",
			],
			"correct": [2]

		}, 
		{
			//"money": 8000,
			"id": 27,
			"multi": false,
			"subject": "金頭腦題",
			"description" : "甲乙丙丁戊五人坐成一排，你要從他們口述的一些線索中，找出他們每個人的位置！" + 
				"</br>    甲：我和丁中間坐了兩個人" +
				"　　　　乙：我的右邊沒坐人" +
				"</br>    丙：我坐在正中央" +
				"　　　　　　　　丁：甲坐在丙旁邊" +
				"</br>    戊：我坐在丁旁邊" +
				"</br>請問以下有哪些正確？ (單選)  (提示：這五個人都很誠實。)",
			"options": [
				"甲坐在戊旁邊",
				"乙在丁的旁邊",
				"丙坐在甲旁邊",
				"甲不在乙旁邊",
			],
			"correct": [2]

		}, 
		{
			//"money": 3000,
			"id": 28,
			"multi": false,
			"subject": "金頭腦題",
			"description" : "你最近幾天參加資訊營而不在家，而你的寵物狗Olive非常想念你。當營期結束你回家時，才走到家門外50公尺Olive就看到了你，非常興奮地開始在你和家門間來來回回地跑。你以每秒一公尺的速度走近家門，而牠的速度是每秒五公尺。請問從Olive開始跑到你終於到家的這段時間，你走了幾公尺？ (單選)",
			"options": [
				"50",
				"100",
				"200",
				"250",
			],
			"correct": [0]
		}, 
		{
			//"money": 8000,
			"id": 29,
			"multi": false,
			"subject": "金頭腦題",
			"description" : "請問地球表面上有幾個點，依序往南、往東、往北各走十公里之後，會回到原點？",
			"options": [
				"0個",
				"1個",
				"2個",
				"無限多個",
			],
			"correct": [1]
		},
		{
			"id": 30 ,
			"multi": true  ,
			"subject": "JavaScript",
			"description" : "下列哪些行為較能防範 XSS 攻擊？ (多選)",
			"options": [
				"清理輸入資料",
				"鍛鍊身體",
				"禁止跨來源資源共用",
				"在瀏覽器內建保護機制",
				"多喝水"
			],
			"correct": [0,2,3]

		},
		{
			"id": 31 ,
			"multi": false  ,
			"subject": "版本控制",
			"description" : "下列何者不是用 git 控制版本的好處？(單選)",
			"options": [
				"能還原程式碼",
				"能開啟分支(branch) 進行分工",
				"不同分支可以進行整合(merge)",
				"可以不用網路來更新共同資料庫(repo)",
			],
			"correct": [3]

		},	
		{
			"id":  32,
			"multi": false  ,
			"subject": "冷笑話",
			"description" : "資工系很多大神們都會選擇雙主修，但是通常不會選擇哪一個科系做為第二主修?(單選)",
			"options": [
				"園藝系",
				"數學系",
				"機械系",
				"昆蟲系",
				"森林系"
			],
			"correct": [3]

		},	
		{
			"id": 33 ,
			"multi": false  ,
			"subject": "時事",
			"description" : "2019溫網以下列何人獲得冠軍?(單選)",
			"options": [
				"C.喬科維奇",
				"S.喬科維奇",
				"I.喬科維奇",
				"E.喬科維奇",
				"N.喬科維奇"
			],
			"correct": [4]

		},	
		{
			"id": 34 ,
			"multi":  false ,
			"subject": "資工小知識",
			"description" : "下午跑RPG時有在資工系館周圍看到哪一座雕塑品?",
			"options": [
				"讀書的小男孩",
				"讀書的小女孩",
				"畫畫的小男孩",
				"畫畫的小女孩",
				"睡覺的小女孩"
			],
			"correct": [1]

		},	
		
		{
			//"money": 3000,
			"id": 35,
			"multi" : false,
			"subject" : "資工小知識",
			"description" : " 請問一下台大資工系目前約成立了幾年?(單選)",
			"options" : [
				"20年",
				"30年",
				"40年",
				"50年",
				"60年",
			],
			"correct" : [ 2 ]
		},

		{
			//"money": 3000,
			"id": 36,
			"multi" : false,
			"subject" : "資訊營",
			"description" : "本屆資訊營總召是哪一位?(單選)",
			"options" : [
				"徐祐謙",
				"王泳錡",
				"曾鈺婷",
				"陳盈如",
			],
			"correct" : [ 0 ]
		},
		
		{
			//"money": 3000,
			"id": 37,
			"multi" : false,
			"subject" : "資工小知識",
			"description" : "請問台大資工英文縮寫為何?(單選)",
			"options" : [
				"CSAE",
				"CSIE",
				"CSTE",
				"CSEE",
			],
			"correct" : [ 1 ]
		},

		{
			//"money": 3000,
			"id": 38,
			"multi" : false,
			"subject" : "資工小知識",
			"description" : "下列何者不是程式語言?(單選)",
			"options" : [
				"C",
				"Python",
				"Java",
				"Reydovan",
			],
			"correct" : [ 3 ]
		},

		{
			//"money": 3000,
			"id": 39,
			"multi" : false,
			"subject" : "時事",
			"description" : "下列哪一位youtuber最近剛結婚?(單選)",
			"options" : [
				"蔡哥",
				"HowHow",
				"蛇丸",
				"阿滴",
			],
			"correct" : [ 1 ]
		},
		{
			//"money": 3000,
			"id": 40,
			"multi" : false,
			"subject" : "資訊營",
			"description" : "資訊營營服總共用了幾種顏色?(單選)",
			"options" : [
				"3",
				"4",
				"5",
				"6",
				"7",
			],
			"correct" : [ 1 ]
		},



	];	

	/* shuffle */
	var i,j;
	/*for (var i = questions.length; i; i--) {
		j = Math.floor(Math.random() * i);
		x = questions[i - 1];
		questions[i - 1] = questions[j];
		questions[j] = x;
	}*/
	i=questions.length;
	while(1){
		j = Math.floor(Math.random() * i);
		
		if(have_ask[j]!=1){//not ask yet
			have_ask[j]=1;
			totalask++;
			break;
		}
	}
	if(totalask==i){
		for(var x=0;x<i;x++)
			have_ask[x]=0;
	}
	console.log("get a Question : " + questions[j].id);


	return questions[j];
	//console.log("end to get a question");
//	io.emit("show_answer",questions[0],"1");
};

