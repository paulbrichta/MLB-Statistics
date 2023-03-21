# MLB-Statistics

## Project Background
#Team 4 Project Proposal MLB Stats
We would like to analyze different team statistics including:
1.	Team Hitting Stats (Batting Avg, RBI, etc.)
2.	Team Pitching Stats (Strikeouts, Saves, etc.)
3.	Team Fielding Stats (Errors, Double Plays, etc.)

**Supervised learning:**
Logistic regression, or Neural Networks
- Compare individual stats against a determined threshold of success (bucket the number of wins <70, 70-90, 90+).

**Unsupervised learning:**
PCA, t-SNE, K-means Cluster Analysis
-	Use a drop-down menu to choose a team. Then it tells you which teams are most like that team based on hitting/pitching/fielding stats. Also, overall which teams the chosen team is most like and had the most similar total stats.
- Using the grouping to analyze which stats have more influence on whether a team will be successful or not.
- [Tableau Analysis](https://public.tableau.com/app/profile/jason.mchone/viz/MLBTeamAnalysis_16790042773510/Story1)

**Questions we were trying to answer:**
- Can unsupervised learning classify teams using the data we have available?
- Could regression analysis be used to determine the anticipated number of wins in a season?
- What teams have performed best historically?

## Approach: 
We performed a **Stepwise Regression Analysis**, which is the iterative construction of a model where independent variables are removed in succession and testing for statistical significance after each iteration.

![Stepwise Regression Analysis](https://github.com/paulbrichta/MLB-Statistics/blob/branch-cj/Images/stepwise_regression_process.png)

Our final model contained 10 independent variables (down from 24).
Furthermore, collinearity was evaluated and one additional variable was dropped.

![Scatter plot](https://github.com/paulbrichta/MLB-Statistics/blob/branch-cj/Images/pairplots_select.png)

**Model performance:**
R2 Score: **0.9304714673783749**
Training Score: **0.9303466731994289**
Testing Score: **0.9297116942632093**







**Reference:**
- [Chart.js](https://www.chartjs.org/)
- [Leaflet](https://leafletjs.com/examples/choropleth/)
- [Bootstrap](https://getbootstrap.com/)
- [JavaScript](https://htmlcheatsheet.com/js/)
- [D3/API](https://d3js.org/)
- Data Source: ![Lahman’s Baseball Database](https://www.openintro.org/data/index.php?data=mlb_teams)


**Project Team Members:** 
* Cherno Jallow: Email: cjallow@hotmail.com
* Jason McHone:
* Kevin Ybarra:
* Omar Espinoza:
* Paul Brichta:
