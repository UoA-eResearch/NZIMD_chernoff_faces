#### Chernoff faces ####
# Jessie Colbert, Daniel Exeter and Katarzyna Sila-Nowicka, 2022, The University of Auckland

#### Adapting code from Dan and his ex-PhD student Grant ####

library (aplpack)
library(RColorBrewer)
library(openxlsx)

IMD = read.xlsx("https://www.fmhs.auckland.ac.nz/content/dam/uoa/fmhs/soph/epi/hgd/docs/IMD2018.xlsx", sheet="IMD18")

face_matrix <- cbind(DZ_ID = IMD$DZ2018
                    , income_face_height = IMD$Rank_Incom # height of face -> income
                    , income_face_width = IMD$Rank_Incom # width of face -> income
                    , zero_face_struc = rep(0, nrow(IMD)) # structure of face -> zeros
                    , emplo_mouth_height = IMD$Rank_Emplo # height of mouth -> employment
                    , emplo_mouth_width = IMD$Rank_Emplo # width of mouth -> employment
                    , health_smile = IMD$Rank_Healt # smiling -> health
                    , educ_eyes_height = IMD$Rank_Educa # height of eyes -> education
                    , educ_eyes_width = IMD$Rank_Educa # width of eyes -> education
                    , crime_hair_height = IMD$Rank_Crime # height of hair -> crime
                    , crime_hair_width = IMD$Rank_Crime # width of hair -> crime
                    , crime_hair_style = IMD$Rank_Crime # style of hair -> crime
                    , access_nose_height = IMD$Rank_Acces # height of nose -> access
                    , access_nose_width = IMD$Rank_Acces # width of nose -> access
                    , housing_ear_width = IMD$Rank_Housi # width of ear -> housing
                    , housing_ear_height = IMD$Rank_Housi # height of ear -> housing
)


xy = -face_matrix[,2:16]
xy<-apply(xy,2,function(x){
  x<-x-min(x); x<-if(max(x)>0) 2*x/max(x)-1 else x })

faces(xy[1], labels = "", col.face = brewer.pal(5, "PuRd"), plot=T, scale=F, print.info=F)

dir.create("faces")
for (i in 1:nrow(IMD)) {
  png(filename = paste0("faces/", IMD$DZ2018[i], ".png"), bg = "transparent")
  faces(xy[i], labels = "", col.face = brewer.pal(5, "PuRd"), plot=T, scale=F, print.info=F)
  dev.off()
}
