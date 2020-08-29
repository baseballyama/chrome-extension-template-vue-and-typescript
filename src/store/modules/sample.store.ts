import { getModule, Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, store, name: 'sample', namespaced: true })
class SampleModule extends VuexModule {
  //   @Mutation
  //   @Action
}

const sampleStore = getModule(SampleModule);
export default sampleStore;
