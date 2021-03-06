// Add videos
USING PERIODIC COMMIT
LOAD CSV WITH HEADERS FROM 'file:///videos.csv' AS line FIELDTERMINATOR ','
CREATE (video:Videos {
    v_id: line.`v_id`,
    name: line.`name`,
    description: line.`description`,
    url: line.`url`,
    recorded: line.`recorded`,
    created: timestamp(),
    updated: timestamp()
})
WITH line, video
MATCH (scenario:Scenarios) WHERE scenario.s_id = line.`s_id`
CREATE (video)-[:belongs_to {
    created: timestamp(),
    updated: timestamp()
}]->(scenario);
