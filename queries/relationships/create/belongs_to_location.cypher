MATCH (l:Locations) WHERE ID(l) = toInt({location_id})
MATCH (s:Scenarios) WHERE ID(s) = toInt({scenario_id})
CREATE (l)-[r:belongs_to {
    created: timestamp(),
    updated: timestamp()
}]->(s)
RETURN
    ID(l) AS location_id,
    l.created AS location_created,
    l.updated AS location_updated,
    l.l_id AS l_id,
    l.name AS location_name,
    l.description AS location_description,
    l.lat AS location_lat,
    l.lng AS location_lng,
    l.location_type AS location_type,
    ID(r) AS relationship_id,
    r.created AS relationship_created,
    r.updated AS relationship_updated,
    ID(s) AS scenario_id,
    s.created AS scenario_created,
    s.updated AS scenario_updated,
    s.s_id AS s_id,
    s.name AS scenario_name,
    s.description AS scenario_description
;
