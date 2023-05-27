


Module.register("MMM-Earth-Live",{

	defaults:{
		mode: "Natural",
		updateInterval: 30*60*100,
		animationSpeed: 3000,
		initialLoadDelay: 1250,
		retryDelay:2500,
		useHeader: false,
		header:"",
		MaxWidth: "50%",
		MaxHeight:"50%",
		rotationInterval:10*1000,


		MonthsArray:{
			"Jan": "01",
            "Feb": "02",
            "Mar": "03",
            "Apr": "04",
            "May": "05",
            "Jun": "06",
            "Jul": "07",
            "Aug": "08",
            "Sep": "09",
            "Oct": "10",
            "Nov": "11",
            "Dec": "12"
		}
	},

	getScripts:function(){
		return ["momnet.js"];
	},

	getStyles: function(){
		return["MMM-Earth-Live.css"]
	},

	start: function() {
        Log.info("Starting module: " + this.name);

        // Set locale.
        this.url = this.getUrl();
        this.today = "";
        this.earth = {};
        this.activeItem = 0;
        this.rotateInterval = null;
        this.scheduleUpdate();
    },

	getDom:function(){

		const wrapper = document.createElement("div");
		wrapper.clasName = "wrapper";

		if(!this.loaded){
			wrapper.innerHTML = "Hello there...<img src='modules/MMM-EARTH/loading/loading.gif' width='22' height='22'>"
		}
	}

});
