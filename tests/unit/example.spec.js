import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login';
var loginUsersList= require('@/assets/users.json');
import MainHeader from '@/components/MainHeader.vue'
import sinon from 'sinon'
import 'babel-polyfill'




describe('Login Screen mount Test',()=>{  
  const wrapper = mount(Login);
  it('Check if the users list is initialised properly or not', () => {    
    expect(wrapper.vm.usersList[0]).to.have.property('password');
  })
  it('Check if the form is not submitted', () => {    
    expect(wrapper.vm.submitted).to.equal(false);
  })
  it('Check if the userName is set to default value', () => {    
    expect(wrapper.vm.userName).to.equal("");
  })
  it('Check if the screenName is set to default value', () => {    
    expect(wrapper.vm.screenName).to.equal("Login");
  })
  it('Check if the errorMessage is set to default value', () => {    
    expect(wrapper.vm.errorMessage).to.equal("");
  })
  it('Check if the password is set to default value', () => {    
    expect(wrapper.vm.password).to.equal("");
  })
  it("getUsers() to be a function", () => {
    expect(wrapper.vm.loginFunction()).to.equal(0);
  });
})
