var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function sign(num) {
    if(num > 0) {
        return 1;
    } else if(num < 0) {
        return -1;
    } else {
        return 0;
    }
}

function d3_chernoff() {
    var facef = 0.5, // 0 - 1
        hairf = 0, // -1 - 1
        mouthf = 0, // -1 - 1
        nosehf = 0.5, // 0 - 1
        nosewf = 0.5, // 0 - 1
        eyehf = 0.5, // 0 - 1
        eyewf = 0.5, // 0 - 1
        browf = 0, // -1 - 1

        line = d3.svg.line()
            .interpolate("cardinal-closed")
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; }),
        bline = d3.svg.line()
            .interpolate("basis-closed")
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; });

    function chernoff(a) {
        if(a instanceof Array) {
            a.each(__chernoff);
        } else {
            d3.select(this).each(__chernoff);
        }
    }

    function __chernoff(d) {
        var ele = d3.select(this),
            facevar = (typeof(facef) === "function" ? facef(d) : facef) * 30,
            hairvar = (typeof(hairf) === "function" ? hairf(d) : hairf) * 80,
            mouthvar = (typeof(mouthf) === "function" ? mouthf(d) : mouthf) * 7,
            nosehvar = (typeof(nosehf) === "function" ? nosehf(d) : nosehf) * 10,
            nosewvar = (typeof(nosewf) === "function" ? nosewf(d) : nosewf) * 10,
            eyehvar = (typeof(eyehf) === "function" ? eyehf(d) : eyehf) * 10,
            eyewvar = (typeof(eyewf) === "function" ? eyewf(d) : eyewf) * 10,
            browvar = (typeof(browf) === "function" ? browf(d) : browf) * 3;

        var face = [{x: 70, y: 60}, {x: 120, y: 80},
                    {x: 120-facevar, y: 110}, {x: 120-facevar, y: 160},
                    {x: 20+facevar, y: 160}, {x: 20+facevar, y: 110},
                    {x: 20, y: 80}];
        ele.selectAll("path.face").data([face]).enter()
            .append("svg:path")
            .attr("class", "face")
            .attr("d", bline);

        var hair = [{x: 70, y: 60}, {x: 120, y: 80},
                    {x: 140, y: 45-hairvar}, {x: 120, y: 45},
                    {x: 70, y: 30}, {x: 20, y: 45},
                    {x: 0, y: 45-hairvar}, {x: 20, y: 80}];
        ele.selectAll("path.hair").data([hair]).enter()
            .append("svg:path")
            .attr("class", "hair")
            .attr("d", bline);

        var mouth = [{x: 70, y: 130+mouthvar},
                     {x: 110-facevar, y: 135-mouthvar},
                     {x: 70, y: 140+mouthvar},
                     {x: 30+facevar, y: 135-mouthvar}];
        ele.selectAll("path.mouth").data([mouth]).enter()
            .append("svg:path")
            .attr("class", "mouth")
            .attr("d", line);

        var nose = [{x: 70, y: 110-nosehvar},
                    {x: 70+nosewvar, y: 110+nosehvar},
                    {x: 70-nosewvar, y: 110+nosehvar}];
        ele.selectAll("path.nose").data([nose]).enter()
            .append("svg:path")
            .attr("class", "nose")
            .attr("d", line);

        var leye = [{x: 55, y: 90-eyehvar}, {x: 55+eyewvar, y: 90},
                    {x: 55, y: 90+eyehvar}, {x: 55-eyewvar, y: 90}];
        var reye = [{x: 85, y: 90-eyehvar}, {x: 85+eyewvar, y: 90},
                    {x: 85, y: 90+eyehvar}, {x: 85-eyewvar, y: 90}];
        ele.selectAll("path.leye").data([leye]).enter()
            .append("svg:path")
            .attr("class", "leye")
            .attr("d", bline);
        ele.selectAll("path.reye").data([reye]).enter()
            .append("svg:path")
            .attr("class", "reye")
            .attr("d", bline);

        ele.append("svg:path")
            .attr("class", "lbrow")
            .attr("d", "M" + (55-eyewvar/1.7-sign(browvar)) + "," +
                       (87-eyehvar+browvar) + " " +
                       (55+eyewvar/1.7-sign(browvar)) + "," +
                       (87-eyehvar-browvar));
        ele.append("svg:path")
            .attr("class", "rbrow")
            .attr("d", "M" + (85-eyewvar/1.7+sign(browvar)) + "," +
                       (87-eyehvar-browvar) + " " +
                       (85+eyewvar/1.7+sign(browvar)) + "," +
                       (87-eyehvar+browvar));
    }

    chernoff.face = function(x) {
        if(!arguments.length) return facef;
        facef = x;
        return chernoff;
    };

    chernoff.hair = function(x) {
        if(!arguments.length) return hairf;
        hairf = x;
        return chernoff;
    };

    chernoff.mouth = function(x) {
        if(!arguments.length) return mouthf;
        mouthf = x;
        return chernoff;
    };

    chernoff.noseh = function(x) {
        if(!arguments.length) return nosehf;
        nosehf = x;
        return chernoff;
    };

    chernoff.nosew = function(x) {
        if(!arguments.length) return nosewf;
        nosewf = x;
        return chernoff;
    };

    chernoff.eyeh = function(x) {
        if(!arguments.length) return eyehf;
        eyehf = x;
        return chernoff;
    };

    chernoff.eyew = function(x) {
        if(!arguments.length) return eyewf;
        eyewf = x;
        return chernoff;
    };

    chernoff.brow = function(x) {
        if(!arguments.length) return browf;
        browf = x;
        return chernoff;
    };

    return chernoff;
}

d3.chernoff = function() {
    return d3_chernoff(Object);
};


}
/*
     FILE ARCHIVED ON 22:27:38 Jun 22, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:13:52 May 09, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 232.522
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.056
  cdx.remote: 0.049
  esindex: 0.007
  LoadShardBlock: 205.941 (3)
  PetaboxLoader3.datanode: 50.87 (5)
  load_resource: 139.259 (2)
  PetaboxLoader3.resolve: 121.706 (2)
*/