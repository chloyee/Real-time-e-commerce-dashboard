package nchu.ss.eCommerce;

import org.apache.storm.Config;
import org.apache.storm.LocalCluster;
import org.apache.storm.StormSubmitter;
import org.apache.storm.generated.AlreadyAliveException;
import org.apache.storm.generated.AuthorizationException;
import org.apache.storm.generated.InvalidTopologyException;
import org.apache.storm.kafka.spout.KafkaSpout;
import org.apache.storm.kafka.spout.KafkaSpoutConfig;
import org.apache.storm.topology.TopologyBuilder;

public class eCommerceTopology {
    public static void main(String[] args) throws Exception {
        //从kafka当中获取数据
        TopologyBuilder builder = new TopologyBuilder();
        KafkaSpoutConfig.Builder<String, String> kafkaSpoutConfig = KafkaSpoutConfig.builder("localhost:9092,localhost:9092,localhost:9092", "bookOrder");
        kafkaSpoutConfig.setGroupId("bookOrder_group");
        KafkaSpoutConfig<String, String> build = kafkaSpoutConfig.build();
        KafkaSpout<String, String> kafkaSpout = new KafkaSpout<>(build);
        builder.setSpout("kafkaSpout", kafkaSpout,5);

        builder.setBolt("processBolt", new ProcessOrderBolt(), 8).localOrShuffleGrouping("kafkaSpout");
        Config config = new Config();
        if(args.length > 0){
            config.setNumWorkers(2);
            config.setDebug(false);
            StormSubmitter.submitTopology(args[0],config,builder.createTopology());
        }else{
            LocalCluster cluster = new LocalCluster();
            config.setDebug(true);
            cluster.submitTopology("realBoard",config,builder.createTopology());
        }
    }
}
