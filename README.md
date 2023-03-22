# MLB-Statistics
## MLB Teams Logos

![team's logos](https://github.com/paulbrichta/MLB-Statistics/blob/branch-cj/Images/teams_logos2.png)

# Team 4 Project Proposal MLB Stats

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

## MLB DATA ANALYSIS: <br>
We focused on historical team data by year for all MLB teams. This data was from 1876-2020. We made the decision to focus only on baseball played in the modern era, post 1945. We then dropped nulls which took away 1946 - 1969 & 2020. With the remaining data we performed both unsupervised & supervised machine learning that resulted in 4 classifications of teams/year & a definitive list of correlated team stats.

## Approach: 

# Un-Supervised Machine Learning - Classification-1

- Using Cleaned Data from 1970 - 2019 data was prepared for classification 
- StandardScaler was used for data transformation 
- PCA used to reduce dimensionality 
- TSNE was used to reduce the dataset dimensions & produce initial cluster


![unsupervised cluster1](https://github.com/paulbrichta/MLB-Statistics/blob/branch-cj/Images/unsupervised_cluster1.png)

# Un-Supervised Machine Learning - Classification-2

- Cluster Analysis was performed using KMeans
- Elbow Curve Plotted
- Best Clusters Determined 
- K-3 used to predict clusters & PCA for classification
- Classes assigned to team by year
- Teams plotted by class/cluster 


![unsupervised cluster2](https://github.com/paulbrichta/MLB-Statistics/blob/branch-cj/Images/unsupervised_cluster2.png)


# Supervised Machine Learning - Regression Analysis
After initial data processing and cleaning, our dataset contained 1384 rows and 31 columns, corresponding to MLB stats from 1970 to 2019, including 36 teams, and the following metrics and variables:

<table cellpadding="5" cellspacing="1" border="1">
<tr><td>year</td><td>walks</td><td>saves</td></tr>
<tr><td>team_name</td><td>strikeouts_by_batters</td><td>outs_pitches</td></tr>
<tr><td>games_played</td><td>stolen_bases</td><td>hits_allowed</td></tr>
<tr><td>wins</td><td>caught_stealing</td><td>homeruns_allowed</td></tr>
<tr><td>losses</td><td>batters_hit_by_pitch</td><td>walks_allowed</td></tr>
<tr><td>runs_scored</td><td>sacrifice_flies</td><td>strikeouts_by_pitchers</td></tr>
<tr><td>hits</td><td>opponents_runs_scored</td><td>errors</td></tr>
<tr><td>doubles</td><td>earned_runs_allowed</td><td>double_plays</td></tr>
<tr><td>triples</td><td>complete_games</td><td>fielding_percentage</td></tr>
<tr><td>homeruns</td><td>shutouts</td><td>class'</td></tr>
</table>

We wanted to understand how much of the variability in the response variable y (number of “wins”) can be explained by changes in an X number of variables.
Additionally, we wanted to find whether the number of variables can be reduced without affecting the model score significantly.
Our approach was to perform a Stepwise Regression Analysis, which is the iterative construction of a model where independent variables are removed in succession and testing for statistical significance after each iteration (Kwok, 2021). This process is illustrated in the figure below.

![Stepwise Regression Analysis](https://github.com/paulbrichta/MLB-Statistics/blob/branch-cj/Images/stepwise_regression_process.png)

After this process, our final model contained 10 independent variables (down from 24).
Furthermore, collinearity was tested using the Variance Inflation Factor, and one additional variable was dropped.
The final list of dependent variables are shown in the table below.

<table cellpadding="5" cellspacing="1" border="1">
<tr><td>runs_scored</td><td>saves</td></tr>
<tr><td>walks</td><td>outs_pitches</td></tr>
<tr><td>opponents_runs_scored</td><td>walks_allowed</td></tr>
<tr><td>complete_games</td><td>strikeouts_by_pitchers</td></tr>
<tr><td>shutouts</td><td>errors</td></tr>
</table>

We also tested the model performance and the results are listed below.
- R2 Score: 0.9304714673783749
- Training Score: 0.9303466731994289
- Testing Score: 0.9297116942632093

A pairplot was generated to visually explor how each independent variable correlated with the dependent variable ("wins"). The figure below shows the top row.


![Scatter plot](https://github.com/paulbrichta/MLB-Statistics/blob/branch-cj/Images/pairplots_select.png)

# Supervised Machine Learning - Regression Analysis

In this part of the project, we wanted to combined the classification work (unsupervised learning) and regression analysis (supervised learning) in one visualization of the different clusters and the 11 baseball statistics. We decided for using matplotlib to create a “radar chart,” which shows the relative values of all metrics and for the four clusters included. Data was normalized to the same scale using the spicy library, and its zcore tool. The resulting chart is shown next.

![radar_chart](https://github.com/paulbrichta/MLB-Statistics/blob/branch-cj/Images/radar_chart.png)


# Tabeau Analysis
![tabeau analysis](https://github.com/paulbrichta/MLB-Statistics/blob/branch-cj/Images/tabeau%20analysis.png)


# Reference
- [Chart.js](https://www.chartjs.org/)
- [Leaflet](https://leafletjs.com/examples/choropleth/)
- [Bootstrap](https://getbootstrap.com/)
- [JavaScript](https://htmlcheatsheet.com/js/)
- [D3/API](https://d3js.org/)
- MLB Data Source: ![Lahman’s Baseball Database](https://www.openintro.org/data/index.php?data=mlb_teams)
- Kwok, Ryan. 2021. [Stepwise Regression Tutorial in Python](https://towardsdatascience.com/stepwise-regression-tutorial-in-python-ebf7c782c922)
- Chandradas, Abhijith. 2021. [How to Create a Radar Chart in Python?](https://towardsdatascience.com/how-to-create-a-radar-chart-in-python-36b9ebaa7a64)
- Shivapriya1726. 2021. [How to Standardize Data in a Pandas DataFrame?](https://www.geeksforgeeks.org/how-to-standardize-data-in-a-pandas-dataframe/)
- Link to Final Project: [MBL-Statistics](https://paulbrichta.github.io/MLB-Statistics/index.html)

<footer>
    <h3>Authors:</h3>
    <a href="https://github.com/cjallow01" class="white">Cherno Jallow</a> &nbsp;
    <a href="https://github.com/JPMCHONE1" class="white">Jason McHone</a> &nbsp;
    <a href="https://github.com/KYbarra4" class="white">Kevin Ybarra</a> &nbsp;
    <a href="https://github.com/OAEspinoza" class="white">Omar Espinoza</a> &nbsp;
    <a href="https://github.com/paulbrichta" class="white">Paul Brichta</a>
</footer>
