import { beforeEach, describe, expect, it } from "vitest";
import { useManageStore } from "./manageStore";

const state = () => useManageStore.getState();

describe("manageStore", () => {
  beforeEach(() => useManageStore.setState({ isOpen: false, isFront: true }));

  it("opens in front", () => {
    useManageStore.setState({ isFront: false });
    state().open();
    expect(state()).toMatchObject({ isOpen: true, isFront: true });
  });

  it("sendBack keeps it open behind, bringForward restores it", () => {
    state().open();
    state().sendBack();
    expect(state()).toMatchObject({ isOpen: true, isFront: false });
    state().bringForward();
    expect(state()).toMatchObject({ isOpen: true, isFront: true });
  });

  it("sendBack while closed changes nothing", () => {
    state().sendBack();
    expect(state()).toMatchObject({ isOpen: false, isFront: true });
  });

  it("close closes", () => {
    state().open();
    state().close();
    expect(state().isOpen).toBe(false);
  });
});
